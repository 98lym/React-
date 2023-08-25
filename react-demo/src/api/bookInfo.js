import axios from '../utils/request.js'

export const getBooks = (params) => {
  return axios({
    url: '/api/books',
    method: 'GET',
    params
  })
}