const Investment = require('../models/investment.model');

// Get all investments
exports.getAllInvestments = async (req, res) => {
  try {
    const investments = await Investment.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: investments.length,
      data: investments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching investments',
      error: error.message
    });
  }
};

// Get single investment
exports.getInvestment = async (req, res) => {
  try {
    const investment = await Investment.findById(req.params.id);
    
    if (!investment) {
      return res.status(404).json({
        success: false,
        message: 'Investment not found'
      });
    }

    res.status(200).json({
      success: true,
      data: investment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching investment',
      error: error.message
    });
  }
};

// Create new investment
exports.createInvestment = async (req, res) => {
  try {
    const investment = await Investment.create(req.body);
    
    res.status(201).json({
      success: true,
      data: investment
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating investment',
      error: error.message
    });
  }
};

// Update investment
exports.updateInvestment = async (req, res) => {
  try {
    const investment = await Investment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!investment) {
      return res.status(404).json({
        success: false,
        message: 'Investment not found'
      });
    }

    res.status(200).json({
      success: true,
      data: investment
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating investment',
      error: error.message
    });
  }
};

// Delete investment
exports.deleteInvestment = async (req, res) => {
  try {
    const investment = await Investment.findByIdAndDelete(req.params.id);

    if (!investment) {
      return res.status(404).json({
        success: false,
        message: 'Investment not found'
      });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting investment',
      error: error.message
    });
  }
}; 