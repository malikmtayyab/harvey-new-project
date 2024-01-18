import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8999/tank-ws/api'
export const GetRequest = async (url, data) => {
    try {
        const response = await axios.get(url, data);
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};
export const PostRequest = async (url, data) => {
    try {
        const response = await axios.post(url, data);
        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};

