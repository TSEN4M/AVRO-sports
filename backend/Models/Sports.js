const mongoose = require('mongoose');
const sportSchema = new mongoose.Schema({
    sport_id: {
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
    description: {
        type: String,
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
sportSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

const Sport = mongoose.model('sports', sportSchema);

module.exports = Sport;
