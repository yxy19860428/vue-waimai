//封闭一个ajax

import axios from 'axios'

export default function ajax(url, path, data = {}) {
  //封闭一个promiseDX
  return new Promise(function (resolve, reject) {
    let promise
    if (path === 'GET') {
      let str
      //data={username:a,age:b} => username=a&age=b
      //以下这个方法的返回值是一个数组,而这个数组是以键名组成的数组
      Object.keys(data).forEach(key => {
        str += key + '=' + data[key] + '&'
      })
      if (str) {
        str = str.substring(0, str.length - 1)
        url = url + '?' + str
      }
      promise = axios.get(url)
    } else if (path === 'POST') {
      promise = axios.post(url)
    }
    promise.then(function (response) {
      resolve(response.data)
    })
      .catch(function (err) {
        reject(err)
      })
  })
}
