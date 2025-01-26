import React, { useEffect, useState } from 'react';
import { getLoans } from '../api/loan';

const Dashboard = () => {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const { data } = await getLoans();
        setLoans(data);
      } catch (err) {
        setError('Failed to fetch loans');
      }
    };
    fetchLoans();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-4">Loan ID</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan._id} className="border-b">
              <td className="p-4">{loan._id}</td>
              <td className="p-4">{loan.amount}</td>
              <td className="p-4">{loan.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
