import axios from 'axios';

import kc from './Keycloack';

// axios.defaults.baseURL = 'https://tm-ws.trackafrik.com/tank-ws/api';
axios.defaults.baseURL = 'http://localhost:8999/tank-ws/api';

const accessToken = kc.token;
const headers = {
  Authorization: `Bearer ${accessToken}`,
  'Content-Type': 'application/json', // Adjust the content type as needed
};
export const GetRequest = async (url, data) => {
  try {
    const response = await axios.get(url, { headers });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const PostRequest = async (url, data) => {
  try {
    // const accessToken=kc.token
    const response = await axios.post(url, data, { headers });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
