const mongoose = require('mongoose');

const guarantorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
        },
        cnic: {
            type: String,
            required: true,
            unique: true,
            minlength: 13,
            maxlength: 13,
        },
        location: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            match: [/^\d{10,15}$/, 'Please provide a valid phone number'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Guarantor', guarantorSchema);
