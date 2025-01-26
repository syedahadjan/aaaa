const { protect } = require('./auth');  // Importing protect middleware

// @desc Check if the user is an admin
// @route Middleware for admin-only routes
const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next(); // User is an admin, continue to next route
    } else {
        res.status(403).json({ message: 'Not authorized as an admin' });
    }
};

module.exports = { admin };
