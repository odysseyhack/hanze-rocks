import Reducer from "./Reducer";
import { history } from "../utils/history";

class AuthReducer extends Reducer {

    static namespace = "auth";

    initialState = {
        loggedIn: !!localStorage.getItem("jwt"),
    };

    loginSucces() {
        return {loggedIn: true};
    }
}

export default AuthReducer;