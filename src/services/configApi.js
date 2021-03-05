import axios from 'axios'

const headerSetting = () => {
  let user = JSON.parse(localStorage.getItem('user'))

  if(user && user.token) {
    return {
      "content-type":"application/json",
      "connection":"keep-alive",
      "Authorization": 'Bearer ' + user.token
    }
  }else{
    return {
      "content-type":"application/json",
      "connection":"keep-alive",
    }
  }
}

export const apiConfig = axios.create({
  baseURL: 'http://api-setc.com/api',
  headers: headerSetting()
});