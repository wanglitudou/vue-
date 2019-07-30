import axios from "axios";
import router from "./router/routes";

//请求拦截器
axios.interceptors.request.use(
  config => {
    // console.log(window.sessionStorage.getItem('token'))
    if (window.sessionStorage.token) {
      // config.headers.Authorization = 'token'+window.sessionStorage.token;
    } else {
      // 跳转到登录方法
      // console.log("3213213213213213213")
      // this.$router.push({ name: "details" });
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
// //返回拦截器
// axios.interceptors.response.use(
//     config => {

//     },
//     err =>{
//         return Promise.reject(err)
//     }

// )
export default axios;
