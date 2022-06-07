// AXIOS
import axios from "axios";

const request = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api/` // khi api đc gọi thì sẽ nối cái baseUrl này vào chỗ .get
})

export const get = async (path, option = {}) =>{
    const response = await request.get(path, option);
    return response.data
}
export default request