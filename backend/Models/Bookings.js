const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    booking_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId,
        index: true,
        unique: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    session_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sessions'
    },
    status: {
        type: String,
        required: true,
        enum: ['confirmed', 'pending', 'cancelled'],
        default: 'pending'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

// Middleware to update the `updated_at` field before each save
bookingSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;

