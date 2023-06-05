import axios from 'axios';

//https://viacep.com.br/ws/01001000/json/

const api = axios.create({
    baseURL: 'https://api-techtitans-default-rtdb.firebaseio.com'
});

export default api;