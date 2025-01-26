const express = require('express');
const { createGuarantor, getAllGuarantors } = require('../controllers/guarantorController');

const router = express.Router();

router.post('/', createGuarantor);
router.get('/', getAllGuarantors);

module.exports = router;
