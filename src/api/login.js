import fetch from 'utils/fetch';
import axios from 'axios';

export function loginByEmail(username, password) {

  const data = "grant_type=password&username="+username+"&password="+password;

  return axios({
    method: 'post',
    url: process.env.BASE_API + '/uaa/oauth/token',
    data: data,
    headers:{
      // 'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization" : "Basic d2ViX2FwcDo="
    }
  })
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}

