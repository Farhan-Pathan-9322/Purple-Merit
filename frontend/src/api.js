import axios from 'axios';


const API = axios.create({
  baseURL: (process.env.REACT_APP_API_URL || 'http://localhost:4000') + '/api',
  withCredentials: true
});

export const fetchLatestSimulation = () => API.get('/simulations/latest');

export default API;

