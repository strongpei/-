//对axios进行二次封装
import axios from "axios"

const instance = axios.create({
  baseURL: '/api', //让代理服务器转发请求4000
  timeout: 3000 //配置请求超时时间
});


//添加请求拦截器
axios.interceptors.request.use(function (config) {
  
  return config
});



// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  
  return response;
}, function (error) {
  
  return Promise.reject(error);
});

export default instance