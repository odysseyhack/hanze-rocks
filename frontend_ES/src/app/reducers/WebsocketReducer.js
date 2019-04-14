import Reducer from "./Reducer";

class WebsocketReducer extends Reducer
{

    static namespace = "socket";

    initialState = {
        emergency: false,
    };

    receive(payload, state) {
        return {
            ...state,
            emergency: true
        }
    }
}

export default WebsocketReducer;