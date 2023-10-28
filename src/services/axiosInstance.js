import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'https://giftstacc.way2webhost.com/api',

  headers: {
    'Content-Type': 'application/json'
  }
});
