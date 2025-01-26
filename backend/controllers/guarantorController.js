const Guarantor = require('../models/Guarantor');

// @desc Create a guarantor
// @route POST /api/guarantors
// @access Public
const createGuarantor = async (req, res) => {
    const { name, email, cnic, location, phoneNumber } = req.body;

    try {
        const guarantor = await Guarantor.create({ name, email, cnic, location, phoneNumber });
        res.status(201).json(guarantor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Get all guarantors
// @route GET /api/guarantors
// @access Public
const getAllGuarantors = async (req, res) => {
    try {
        const guarantors = await Guarantor.find();
        res.status(200).json(guarantors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createGuarantor,
    getAllGuarantors,
};
