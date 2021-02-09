import axios from 'axios'

const request = axios.create({
  baseURL: '/',
  timeout: 10000
})

request.interceptors.request.use(config => {
  config.headers.token = localStorage.getItem('token')

  return config
})

request.interceptors.response.use(response => {
  return response
}, err => {
  console.log(err)
  return err
})

export default request
