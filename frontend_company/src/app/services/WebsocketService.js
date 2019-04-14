import Service from "./Service";
import io from 'socket.io-client';
import {config} from "../config";

class WebsocketService extends Service {

    socket;

    constructor() {
        super();

        this.socket = io(config["websockets"]["url"]);

        this.socket.on('connect', this._onConnect);
        this.socket.on('disconnect', this._onDisconnect);
    }

    /**
     * Sends an event with optional body to the socket
     *
     * @param eventName
     * @param args
     */
    send(eventName, ...args) {
        this.socket.emit(eventName, ...args);
    }

    /**
     * Add listener to a specific event
     *
     * @param eventName
     * @param callback
     */
    on(eventName, callback) {
        this.socket.on(eventName, callback);
    }

    /**
     * Callback called when the client is connected
     * @private
     */
    _onConnect() {
        console.log("connected")
    }

    _onDisconnect() {
        this.log("Client disconnected");
    }
}

export default WebsocketService;