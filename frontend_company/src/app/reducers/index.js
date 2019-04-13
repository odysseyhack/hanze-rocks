import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import SessionReducer from "./SessionReducer";

export default combineReducers({
    auth: (...args) => new AuthReducer().call(...args),
    session: (...args) => new SessionReducer().call(...args),
})

