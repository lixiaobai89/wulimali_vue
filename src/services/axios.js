// src/axios.js
import axios from 'axios';
import router from '@/router'; // Adjust the path accordingly

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASEURL_API, // Update with your backend API URL
    withCredentials: true, // Ensure cookies are sent with requests
});

// Optional: You can add request/response interceptors if needed
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.error('Unauthorized: Invalid or missing token');
                    router.push({ path: '/Login' });
                    break;
                case 404:
                    console.error('Resource not found');
                    break;
                case 500:
                    console.error('Server error');
                    break;
                // Add more cases as needed
                default:
                    console.error('An error occurred:', error.response.data);
            }
        } else {
            console.error('Network error or no response:', error.message);
        }
        // Handle errors globally here if needed
        return Promise.reject(error);
    }
);

export default axiosInstance;
