const express = require('express');
const { createLoan, getAllLoans, getLoanById } = require('../controllers/loanController');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Protected loan routes
router.post('/', protect, createLoan); // Only authenticated users can create loans
router.get('/', protect, getAllLoans); // Only authenticated users can view all loans
router.get('/:id', protect, getLoanById); // Only authenticated users can view loan by ID

module.exports = router;
