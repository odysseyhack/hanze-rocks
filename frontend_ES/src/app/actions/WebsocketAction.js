import Action from "./Action";

class WebsocketAction extends Action {

    namespace = "socket";

    receive(dispatch, data) {
        dispatch(this.dispatch("receive"));
    }
}

export default WebsocketAction;