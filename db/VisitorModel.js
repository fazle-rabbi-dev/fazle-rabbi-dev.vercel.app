const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
  },
  ipDetails: {
    type: String,
    required: true,
  },
  userAgent: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  pageVisited: {
    type: String,
    required: true,
  },
  source: {
    type: String,
  }
});

const Visitors = mongoose.models.Visitors || mongoose.model('Visitors', visitorSchema);

module.exports = Visitors;