import axios from "axios";
import { KEY_ACCESS_TOKEN, getItem } from "../utils/localStorageManager";

// const BASE_URL = "https://comity-backend.onrender.com";
const BASE_URL = "http://localhost:4000";

axios.interceptors.request.use(req => {
    try {
        const authToken = getItem(KEY_ACCESS_TOKEN);
        req.headers.Authorization = `Bearer ${authToken}`;
        return req;
    } catch (err) {
        console.log("Error in request", err);
    }
})

const API = async ( urlObj, payload ) => {
    return await axios({
        method: urlObj.method,
        url: `${BASE_URL}/${urlObj.endpoint}`,
        data: payload
    })
}

export default API;