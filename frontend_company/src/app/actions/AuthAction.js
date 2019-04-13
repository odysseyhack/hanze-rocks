import Action from "./Action";
import ApiService from "../services/ApiService";
import {history} from "../utils/history";


class AuthAction extends Action {

    constructor() {
        super();

        this.namespace = "auth";

        this.apiClient = ApiService.getInstance();
    }

    async login(dispatch, data) {
        dispatch(this.dispatch("pending"));

        try {
            let token = await this.apiClient.post("/oauth/token", {
                "grant_type": "password",
                "client_id": "2",
                "client_secret": "vd2ymgdVIxpfzUsEiYQsBRetfWM5tpzbebncOVBK",
                "username": data.username,
                "password": data.password,
                "scope": "*"
            }, false);

            localStorage.setItem("jwt", JSON.stringify(token.data));

            this.apiClient.setTokenInfo(token.data);

            let user = await this.apiClient.get("/userinfo");
            localStorage.setItem("user", JSON.stringify(user.data));

            dispatch(this.dispatch("session.updateUser", user.data));
            dispatch(this.dispatch("auth.loginSuccess"));

            history.push("/dashboard");

        }
        catch (e) {
            let message = e.response && e.response.data && e.response.data.message;
            if(message) {
                alert(message);
            }
            else {
                alert("Er iets iets fout gegaan");
            }

        }

        dispatch(this.dispatch("impending"))
    }

    logout(dispatch) {
        dispatch(this.dispatch("pending"));

        localStorage.removeItem("jwt");
        localStorage.removeItem("user");

        history.push("/login");

        dispatch(this.dispatch("impending"));
    }

    getUserInfo() {
        return async dispatch => {

        }
    }
}

export default AuthAction;