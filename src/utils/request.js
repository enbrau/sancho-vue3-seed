import axios from 'axios'
import settings from '@/settings'
import { requestHook, responseHook } from '@/hooks'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: settings.client.withCredentials,
  timeout: settings.client.timeout
})

service.interceptors.request.use(
  request => {
    try {
      requestHook.call(request)

      // TODO
    } catch(e) {
      console.error('Error handling request: ', e)
    }
    return request
  },
  error => {
    try {
      // TODO
    } catch(e) {
      console.error('Error handling request error: ', e)
    }
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    try {
      responseHook.call(response)

      // TODO
    } catch(e) {
      console.error('Error handling response: ', e)
    }
    return response
  },
  error => {
    try {
      // TODO
    } catch(e) {
      console.error('Error handling response error: ', e)
    }
    return Promise.reject(error)
  }
)

export default service
