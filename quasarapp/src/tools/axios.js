import axios from 'axios'
// prod

const url = window.location.href
const arr = url.split('/')
const result = arr[0] + '//' + arr[2]

const axiosInstance = axios.create({
  baseURL: result,
  timeout: 90000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
})
export { axiosInstance }
