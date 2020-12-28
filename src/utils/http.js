import qs from 'querystring'

export function getData(url) {// get 请求
  const result = fetch(url)
  return result//  返回 promise 对象
}

export function postData(url, data) {// post 请求
  const result = fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */* ',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: qs.stringify(data)
  })
  return result// 返回 promise 对象
}