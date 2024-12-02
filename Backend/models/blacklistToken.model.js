const mongoose = require('mongoose');

const blacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true, // Ensure each token is stored only once
  },
  createdAt: {
    type: Date,
    default: Date.now, // Timestamp when the token was blacklisted
    expires: 86400 // 24 hours in seconds
  },

});

module.exports = mongoose.model('BlacklistedToken', blacklistedTokenSchema);
