import Action from "./Action";
import WebsocketService from "../services/WebsocketService";

class EmergencyAction extends Action {

    /**
     * @type {WebsocketService}
     */
    socket;

    constructor() {
        super();

        this.socket = WebsocketService.getInstance();
    }

    send(dispatch) {
        this.socket.send("EmergencyEvent");
    }
}

export default EmergencyAction;