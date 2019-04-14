import React, {Component} from 'react';
import PageLayout from "../shared/PageLayout";
import WebsocketAction from "../../../../app/actions/WebsocketAction";
import {connect} from "react-redux";
import WebsocketService from "../../../../app/services/WebsocketService";

import Map from "pigeon-maps";
import Marker from "pigeon-marker";

class Dashboard extends Component {

    /**
     * @type {WebsocketService}
     */
    websocketServer;

    state = {
        acceptedEmergency: false,
        showAdvise: false,
    }

    constructor(props) {
        super(props);

        this.notificationRef = React.createRef();
        this.websocketServer = WebsocketService.getInstance();

        this.websocketServer.on("EmergencyReceivedEvent", () => {
            this.props.sendSocketDataToState();
        });
    }

    rejectEmergency = (e) => {
        e.preventDefault();
    };

    acceptEmergency = () => {
        this.setState({acceptedEmergency: true, showAdvise: true});
    };

    generateMap() {

        const map = (
            <Map center={[50.874, 4.6947]} zoom={17} height={400}>
                <Marker anchor={[50.874, 4.6947]} payload={1} onClick={({ event, anchor, payload }) => {}} />
            </Map>
        )

        return map;
    }

    render() {
        return (
            <PageLayout>
                {this.props.websocket.emergency && !this.state.acceptedEmergency ?
                    <div className="emergency-notification" ref={this.notificationRef}>
                        <div className="info">
                            An emergency occured! You are calling the driver now. Did you get in contact?
                        </div>
                        <div className="actions">
                            <button className="action-button good" onClick={this.rejectEmergency}>Yeah no worries, false alarm</button>
                            <button className="action-button bad" onClick={this.acceptEmergency}>No, there must be something terribly wrong!</button>
                        </div>
                    </div> :
                    !this.state.showAdvise ?
                        <span>Gladly no accidents happened!</span> :
                        null
                }
                {this.state.showAdvise ?
                    <div>
                        <div className="card">
                            <h3>Emergency service advise rapport</h3>
                            <div className="card-header">
                                Location of accident
                            </div>
                            <section className="advise-section">
                                <div>
                                    {this.generateMap()}
                                </div>

                            </section>
                            <div className="card-header">
                                Truck information
                            </div>
                            <section className="advise-section">
                                <div className="row">
                                    <p><strong>Driver name: </strong> Rutger van Zuidam</p>
                                    <p><strong>Type of truck: </strong> VOLVO FH16</p>
                                    <p><strong>Number of passengers: </strong> 2</p>
                                </div>
                            </section>
                            <div className="card-header">
                                Cargo information
                            </div>
                            <section className="advise-section">
                                <div className="grid">
                                    <div className="col">
                                        <p><strong>Type of cargo:</strong> ETHERS, N.O.S</p>
                                        <p><strong>UN number: </strong> 3271</p>
                                        <p><strong>HIN number: </strong> 33</p>
                                        <p><strong>Number of packages: </strong> 15</p>
                                    </div>
                                    <div className="col">
                                        <p><strong>Method of packing: </strong> cans</p>
                                        <p><strong>Gross weight in KG: </strong> 200KG</p>
                                        <p><strong>Volume in m3: </strong> 20 m3</p>
                                    </div>
                                </div>
                                <div className="danger-section">
                                    <strong>DANGER!</strong> HIGHLY FLAMMABLE! MAY EXPLODE
                                </div>
                                <div className="card-header">
                                    Cargo Characteristics
                                </div>
                                <p>- Gives off dangerous fumes.</p>
                                <p>- Flash point below 23°C.</p>
                                <p>- Hazardous to eyes and air passages.</p>
                                <p>- Immiscible or partly miscible with water (less than 10%), lighter than water.</p>

                                <div className="card-header">
                                    Cargo Hazards
                                </div>
                                <p>- Heating of container(s) will cause pressure rise with risk of bursting and subsequent explosion.</p>
                                <p>- May form explosive mixture with air.</p>
                                <p>- Gives off toxic and irritant fumes when heated or burning.</p>
                                <p>- The vapour may be invisible and is heavier than air. It spreads along the ground and may enter sewers and basements.</p>

                                <div className="card-header">
                                    Fire brigade general orders
                                </div>
                                <p>- Keep container(s) cool with water.</p>
                                <p>- Extinguish with foam - dry powder, subsequently secure with foam blanket.</p>
                                <p>- Do not use water jet or fog (spray) to extinguish.</p>
                                <p>- Use water spray to knock down fire fumes if possible.</p>
                                <p>- Avoid unnecessary run-off of extinguishing media which may cause pollution.</p>

                                <div className="card-header">
                                    Tools needed
                                </div>
                                <p>- Chemical protection suit</p>

                                <div className="card-header">
                                    Fire brigade tooling orders
                                </div>
                                <p>- Ensure proper earthing of pumping equipment.</p>
                                <p>- Use flame proof pump(s). If electrically driven, minimum class T3.</p>
                                <p>- Use mineral oil resistant equipment.</p>
                                <p>- Recover spilled product in vented container fitted with absorption filter.</p>

                                <div className="card-header">
                                    Equipment clean up
                                </div>
                                <p>- Drench with water/detergent before transporting from incident.</p>
                            </section>
                        </div>
                    </div> :
                    null
                }
            </PageLayout>
        );
    }
}

function mapStateToProps(state) {
    return {
        websocket: state.websocket,
    }
}

function mapDispatchToProps() {
    const websocketAction = WebsocketAction.getInstance();

    return {
        sendSocketDataToState: () => dispatch => {
            websocketAction.receive(dispatch);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Dashboard);