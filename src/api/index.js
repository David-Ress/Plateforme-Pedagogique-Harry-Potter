// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = axios.create({
  baseURL: 'harry-potter-back-production.up.railway.app',
});
