import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/guarantors' });

export const createGuarantor = (guarantorData) => API.post('/', guarantorData, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
export const getGuarantors = () => API.get('/', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
