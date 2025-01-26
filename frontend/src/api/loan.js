import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/loans' });

export const createLoan = (loanData) => API.post('/', loanData, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
export const getLoans = () => API.get('/', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
export const getLoanById = (id) => API.get(`/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
