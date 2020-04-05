import axios from 'axios'
import { vue } from '@/main'
const http = axios.create({
    baseURL: `${process.env.VUE_APP_BASE_URL}`,
})

http.interceptors.request.use(config => {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(response => {
    const { data } = response
    if (data.code === 0) return data;
    vue.$message.warning(data.message)

}, () => {
    return Promise.resolve(false);
});
export default http