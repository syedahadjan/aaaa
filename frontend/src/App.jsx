import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import LoanForm from './pages/LoanForm';
import GuarantorForm from './pages/GuarantorForm';
import PrivateRoute from './routes/PrivateRoute';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Services from './pages/Services';
import Analytics from './pages/Analytixs';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Navbar />  {/* Navbar ko Router ke andar daal diya */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Services />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/loan-form"
            element={
              <PrivateRoute>
                <LoanForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/guarantor-form"
            element={
              <PrivateRoute>
                <GuarantorForm />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
