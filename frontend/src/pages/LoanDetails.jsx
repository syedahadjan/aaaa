import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLoanById } from '../api/loan';

const LoanDetails = () => {
  const { loanId } = useParams();
  const [loan, setLoan] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLoan = async () => {
      try {
        const { data } = await getLoanById(loanId);
        setLoan(data);
      } catch (err) {
        setError('Failed to fetch loan details');
      }
    };

    fetchLoan();
  }, [loanId]);

  if (error) return <p className="text-red-500">{error}</p>;

  return loan ? (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Loan Details</h1>
      <p><strong>Loan ID:</strong> {loan._id}</p>
      <p><strong>Amount:</strong> {loan.amount}</p>
      <p><strong>Reason:</strong> {loan.reason}</p>
      <p><strong>Status:</strong> {loan.status}</p>
      <p><strong>Guarantor:</strong> {loan.guarantor?.name || 'N/A'}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default LoanDetails;
