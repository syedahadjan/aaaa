import React, { useState } from 'react';
import { createLoan } from '../api/loan';

const LoanForm = () => {
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createLoan({ amount, reason });
      setSuccess('Loan request created successfully');
      setAmount('');
      setReason('');
    } catch (err) {
      setError('Failed to create loan request');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Apply for a Loan</h1>
      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
        <input
          type="number"
          placeholder="Loan Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Reason for Loan"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
};

export default LoanForm;
