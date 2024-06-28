const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({
    session_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId,
        index: true,
        unique: true
    },
    sportscenter_id: {
        type:  mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Locations'
    },
    sport_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sports'
    },
    start_time: {
        type: Date,
        required: true
    },
    end_time: {
        type: Date,
        required: true
    },
    max_participants: {
        type: Number,
        required: true
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
sessionSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

const Session = mongoose.model('sessions', sessionSchema);

module.exports = Session;
