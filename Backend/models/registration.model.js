const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investment',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true
  },
  state: {
    type: String,
    required: [true, 'State/Province is required'],
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[0-9]{10,15}$/, 'Please enter a valid phone number']
  },
  occupation: {
    type: String,
    required: [true, 'Occupation is required'],
    trim: true
  },
  requirements: {
    type: String,
    required: [true, 'Property requirements are required'],
    trim: true,
    minlength: [20, 'Requirements must be at least 20 characters long']
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'completed', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
registrationSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration; 