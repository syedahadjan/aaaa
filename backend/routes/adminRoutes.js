const express = require('express');
const { admin } = require('../middleware/admin');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Admin-only route example
router.get('/admin-dashboard', protect, admin, (req, res) => {
    res.status(200).json({
        message: 'Welcome to the admin dashboard!',
        user: req.user,
    });
});

module.exports = router;
