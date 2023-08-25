import axios from '../utils/request'

export const search = (params) => {
  return axios ({
    url: '/v1/search/users',
    method: 'get',
    params
  })
}