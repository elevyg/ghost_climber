import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    console.log('Hay token!');
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  } else {
    console.log('No hay token');
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
