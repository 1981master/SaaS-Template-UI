import axios from 'axios'

const rawUrl = process.env.REACT_APP_API_URL || ''
const baseURL = rawUrl.endsWith('/') ? rawUrl.slice(0, -1) : rawUrl

// Create an axios instance with base URL
const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Add Authorization header automatically if token exists
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

// Optional: Response interceptor to handle errors globally
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (!error.response) {
            // Network error
            console.error('Network error:', error)
        } else if (error.response.status === 401) {
            // Token expired or unauthorized
            localStorage.removeItem('token')
            window.location.href = '/login' // auto redirect to login
        }
        return Promise.reject(error)
    },
)

export default instance
