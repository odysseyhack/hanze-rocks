import Reducer from "./Reducer";

class WebsocketReducer extends Reducer
{

    initialState = {
        emergency: true,
    };

    receive(payload, state) {
        return {
            emergency: true
        }
    }
}

export default WebsocketReducer;