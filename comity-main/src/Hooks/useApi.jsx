import API from "../services/api";


const useApi = (urlObj) => {

    const call = async (payload) => {

        let response = {};
        let error = {};

        try {
            let res = await API(urlObj, payload);
            response = res.data;
        } catch (err) {
            error = err.message;
        }
        return {
            response,
            error,
        }
    }
    return { call }
}

export default useApi;