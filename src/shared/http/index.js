import axios from "axios";

// !TODO 需要添加cookie
export const clientAxios = axios.create({
  baseURL: "http://localhost:4000",
});

// !TODO 可能需要添加头部处理 
export const serverAxios = axios.create({
  baseURL: "http://localhost:4000",
});
