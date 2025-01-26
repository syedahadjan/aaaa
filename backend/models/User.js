const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    cnic: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    role: { 
        type: String, 
        enum: ['user', 'admin'], 
        default: 'user' // Default 'user' role
    },
});

module.exports = mongoose.model('User', userSchema);
