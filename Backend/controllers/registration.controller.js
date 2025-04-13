const Registration = require('../models/registration.model');
const Investment = require('../models/investment.model');

// Create new registration
exports.createRegistration = async (req, res) => {
  try {
    const {
      propertyId,
      name,
      email,
      country,
      state,
      phone,
      occupation,
      requirements
    } = req.body;

    // Check if property exists
    const property = await Investment.findById(propertyId);
    if (!property) {
      return res.status(404).json({
        success: false,
        message: 'Property not found'
      });
    }

    // Create registration
    const registration = await Registration.create({
      propertyId,
      name,
      email,
      country,
      state,
      phone,
      occupation,
      requirements
    });

    // Add registration to property
    property.registrations.push(registration._id);
    await property.save();

    res.status(201).json({
      success: true,
      data: registration
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    res.status(400).json({
      success: false,
      message: 'Error creating registration',
      error: error.message
    });
  }
};

// Get all registrations for a property
exports.getPropertyRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({ propertyId: req.params.propertyId })
      .sort({ createdAt: -1 })
      .select('name email country state phone occupation requirements status createdAt');

    res.status(200).json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching registrations',
      error: error.message
    });
  }
};

// Update registration status
exports.updateRegistrationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const registration = await Registration.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'Registration not found'
      });
    }

    res.status(200).json({
      success: true,
      data: registration
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating registration',
      error: error.message
    });
  }
};

// Get all registrations (admin)
exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find()
      .populate('propertyId', 'title price')
      .sort({ createdAt: -1 })
      .select('name email country state phone occupation requirements status createdAt');

    res.status(200).json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching registrations',
      error: error.message
    });
  }
};

// Get single registration
exports.getRegistration = async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id)
      .populate('propertyId', 'title price');

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'Registration not found'
      });
    }

    res.status(200).json({
      success: true,
      data: registration
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching registration',
      error: error.message
    });
  }
}; 