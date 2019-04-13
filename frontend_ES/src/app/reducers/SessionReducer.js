import Reducer from "./Reducer";

class SessionReducer extends Reducer {

    static namespace = "session";

    initialState = {
        pending: false,
        user: localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")),
        expires: null,
    }

    updateUser(payload) {
        return {user: payload};
    }
}

export default SessionReducer;