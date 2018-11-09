import { baseUrl } from './env'
let axios = require('axios')

function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

const apiAxios = (method, url, params, success, failure) => {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: baseUrl,
    withCredentials: false
  }).then(function (res) {
    if (res.data.success === true) {
      if (success) {
        success(res.data)
      }
    } else {
      if (failure) {
        failure(res.data)
      } else {
        window.alert('error:' + JSON.stringfly(res.data))
      }
    }
  }).catch(function (err) {
    let res = err.response
    if (err) {
      window.alert('api error,HTTP CODE:' + res.status)
    }
  })
}
const get = (url, params, success, failure) => { return apiAxios('GET', url, params, success, failure) }
const post = (url, params, success, failure) => { return apiAxios('POST', url, params, success, failure) }
const put = (url, params, success, failure) => { return apiAxios('PUT', url, params, success, failure) }
const deleted = (url, params, success, failure) => { return apiAxios('DELETE', url, params, success, failure) }
export {
  get,
  post,
  put,
  deleted
}
