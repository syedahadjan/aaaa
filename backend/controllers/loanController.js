const Loan = require('../models/Loan');

// @desc Create a new loan
// @route POST /api/loans
// @access Public
const createLoan = async (req, res) => {
    const { user, category, subcategory, amount, loanPeriod, guarantors } = req.body;

    try {
        const loan = await Loan.create({
            user,
            category,
            subcategory,
            amount,
            loanPeriod,
            guarantors,
        });

        res.status(201).json(loan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Get all loans
// @route GET /api/loans
// @access Public
const getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.find().populate('guarantors');
        res.status(200).json(loans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc Get a single loan by ID
// @route GET /api/loans/:id
// @access Public
const getLoanById = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id).populate('guarantors');
        if (!loan) {
            return res.status(404).json({ message: 'Loan not found' });
        }
        res.status(200).json(loan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createLoan,
    getAllLoans,
    getLoanById,
};
