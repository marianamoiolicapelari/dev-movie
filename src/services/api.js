import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'cc4477e1e90e108c7956b83c0d961922',
        language: 'pt-BR',
        page: 1
    }
})

export default api