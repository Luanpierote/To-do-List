//auxiliar na conexão com a API do BackEnd

import axios from  'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api