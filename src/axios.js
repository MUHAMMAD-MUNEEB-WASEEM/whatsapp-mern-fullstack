import axios from 'axios'

const instance = axios.create({
    baseURL: "https://updated-whatsapp-mern.herokuapp.com",
});

export default instance;