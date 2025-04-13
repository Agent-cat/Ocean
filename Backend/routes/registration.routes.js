const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registration.controller');

// Create new registration
router.post('/', registrationController.createRegistration);

// Get all registrations for a property
router.get('/property/:propertyId', registrationController.getPropertyRegistrations);

// Get single registration
router.get('/:id', registrationController.getRegistration);

// Update registration status
router.put('/:id/status', registrationController.updateRegistrationStatus);

// Get all registrations (admin)
router.get('/', registrationController.getAllRegistrations);

module.exports = router; 