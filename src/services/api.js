import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/documentation/'
});

export default api;