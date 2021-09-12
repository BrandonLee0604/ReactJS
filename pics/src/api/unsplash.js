import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID FvKKkdLUQk7U32s8Y8IdMDkAcJbFvKnezXEUsgztz_A'
    }
});