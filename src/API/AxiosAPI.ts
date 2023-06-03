import axios from 'axios'
import { backendURL } from '../Components/App/config/env'


export const instanse = axios.create({
    withCredentials: true,
    baseURL: backendURL,
    headers: {
        "Content-Type": "multipart/form-data"
    }
})
// Interceptor, устанавливающий в headers каждого запроса AccessToken
instanse.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

// Interceptor, отлавливающий ошибку, которую вызывает отсутствие AccessToken-а, и посылающий запрос на получение новой пары токенов
instanse.interceptors.response.use((config: any) => {
    return config;
}, async (error) => {
    const OriginalRequest = error.config
    if (error.response.status === 403 && error.config && !error.config._isRetry) {
        OriginalRequest._isRetry = true
        try {
            let response = await instanse.get('/auth/refresh')
            localStorage.setItem('accessToken', response.data.accessToken)
            return instanse.request(OriginalRequest)
        } catch (e) {
            console.log(e)
        }
    }
    throw error;
})

export const uploadFileAPI = (formData: any) => {
    return instanse.post('/files', formData)
}