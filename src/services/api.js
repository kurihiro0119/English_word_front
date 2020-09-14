import axios from 'axios'

const api = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
})

// 共通エラー処理
api.interceptors.response.use(function(response) {
    return response
}, function(error) {
    console.log('error.response=', error.response)
    return Promise.reject(error)
})

export default api