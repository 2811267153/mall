import axios from "axios";

export function request(config) {
  const instance = axios.create({
    // baseURL: "http://123.207.32.32:8000",
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000,
  });
  // export function request(configs) {
  //   const instances = axios.create({
  //     baseURL: "http://123.207.32.32:8000",
  //     timeout: 5000,
  //   });
  
  //拦截请求
  // instance.interceptros.request.use((config) => {
  //   return config;
  // }),
  //   (err) => {
  //     console.log(err);
  //   };

  // instance.interceptros.response.use((res) => {
  //   return res.data;
  // }),
  //   (err) => {
  //     console.log(err);
  //   };

  return instance(config);
}
