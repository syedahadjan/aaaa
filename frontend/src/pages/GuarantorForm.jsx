import React, { useState } from 'react';
import { createGuarantor } from '../api/guarantor';

const GuarantorForm = () => {
  const [name, setName] = useState('');
  const [cnic, setCnic] = useState('');
  const [relation, setRelation] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createGuarantor({ name, cnic, relation });
      setSuccess('Guarantor added successfully');
      setName('');
      setCnic('');
      setRelation('');
    } catch (err) {
      setError('Failed to add guarantor');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a Guarantor</h1>
      {success && <p className="text-green-500">{success}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
        <input
          type="text"
          placeholder="Guarantor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Guarantor CNIC"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Relation to Applicant"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </div>
  );
};

export default GuarantorForm;
