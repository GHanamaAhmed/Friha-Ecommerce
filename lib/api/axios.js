import axios from "axios";
const customAxios=axios.create({
    baseURL:"http://localhost:4000",
    withCredentials:true
})
export {customAxios}