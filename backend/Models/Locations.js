const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    sportscenter_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId,
        index: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    zipcode: {
        type: String,
        required: true,
        trim: true
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
locationSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

const Location = mongoose.model('locations', locationSchema);

module.exports = Location;

