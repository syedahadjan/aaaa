const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        category: {
            type: String,
            enum: ['Wedding Loans', 'Home Construction Loans', 'Business Startup Loans', 'Education Loans'],
            required: true,
        },
        subcategory: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
            min: 1,
        },
        loanPeriod: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ['Pending', 'Approved', 'Rejected'],
            default: 'Pending',
        },
        guarantors: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Guarantor',
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Loan', loanSchema);
