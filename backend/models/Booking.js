const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  exhibitorName: { type: String, required: true },
  email: { type: String, required: true },
  eventName: { type: String, required: true },
  hallNumber: { type: String, required: true },
  stallNumber: { type: String, required: true, unique: true }, // Prevent duplicate stalls
  bookingDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);