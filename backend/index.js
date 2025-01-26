const express = require('express');
const connectDB = require('./config/db'); // Database connection
const dotenv = require('dotenv'); // Environment variables
const cors = require('cors'); // Cross-Origin Resource Sharing middleware
const userRoutes = require('./routes/userRoutes'); // User routes
const loanRoutes = require('./routes/loanRoutes'); // Loan routes
const guarantorRoutes = require('./routes/GuarantorRoutes'); // Guarantor routes
const adminRoutes = require('./routes/adminRoutes')

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes); // Prefix 'api/users' for user-related routes
app.use('/api/loans', loanRoutes); // Prefix 'api/loans' for loan-related routes
app.use('/api/guarantors', guarantorRoutes); // Prefix 'api/guarantors' for guarantor-related routes
// Routes ko use karen
app.use('/api/admin', adminRoutes);


// Set the server port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
