import Service from "./Service";
import axios from 'axios';
import AuthReducer from "../reducers/AuthReducer";

class ApiService extends Service {

    axiosInstance;

    tokenInfo;

    constructor() {
        super();

        this.axiosInstance = axios.create({
            baseURL: "http://127.0.0.1:8000/api/v1/",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            }
        });

        this.tokenInfo = !!localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")) : null;
    }

    /**
     * Performs a request
     * @private
     */
    async _request(endpoint = "", method = "GET", data = {}, token = true, headers = {}) {

        let init = {
            url: endpoint,
            method: method,
            data: data,
            headers: {
                ...headers,
                ...(token ? {"Authorization": `Bearer ${this.tokenInfo.access_token}`} : {})
            }
        };

        if(Object.keys(data).length) {
            init["data"] = data;
        }

        return await this.axiosInstance.request(init);
    }

    post(endpoint, data, token = true) {
        return this._request(endpoint, "POST", data, token);
    }

    get(endpoint, token = true) {
        return this._request(endpoint, "GET", {}, token);
    }

    setTokenInfo(tokenData) {
        this.tokenInfo = tokenData;
    }
}

export default ApiService;