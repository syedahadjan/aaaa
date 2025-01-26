const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/admin');
const router = express.Router();

router.post('/register', registerUser); // Public route to register
router.post('/login', loginUser); // Public route to login

// Example of a protected route
router.get('/profile', protect, (req, res) => {
    res.status(200).json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
    });
});

module.exports = router;
