const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    user_id: {
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
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true,
        trim: true,
        match: [/^\d{10}$/, 'is invalid']  // Assuming a 10-digit phone number format
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

// Middleware to hash the password before saving the user
userSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (error) {
        return next(error);
    }
});

// Middleware to update the `updated_at` field before each save
userSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

const User = mongoose.model('users', userSchema);

module.exports = User;


