import axios from 'axios';
const token = 'a83a3b9c093293538373c1b0d564dfd82fa0dd0f3e0943977b802a841a06b06c'
const instance = axios.create({
    baseURL: 'https://gorest.co.in/public/v2/',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
});


export default instance;
