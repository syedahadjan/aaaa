import React, { useEffect, useState } from 'react';
import { getAllLoans, getAllUsers } from '../api/admin';

const AdminDashboard = () => {
  const [loans, setLoans] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loansData = await getAllLoans();
        const usersData = await getAllUsers();
        setLoans(loansData.data);
        setUsers(usersData.data);
      } catch (err) {
        setError('Failed to fetch admin data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow-md rounded">
          <h2 className="text-lg font-bold mb-2">Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user._id} className="border-b p-2">
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-4 shadow-md rounded">
          <h2 className="text-lg font-bold mb-2">Loans</h2>
          <ul>
            {loans.map((loan) => (
              <li key={loan._id} className="border-b p-2">
                Loan ID: {loan._id} - Amount: {loan.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
