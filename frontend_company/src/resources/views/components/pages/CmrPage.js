import React, {Component} from 'react';
import PageLayout from "../shared/PageLayout";
import {connect} from "react-redux";
import EmergencyAction from "../../../../app/actions/EmergencyAction";

class CmrPage extends Component {

    state = {
        LocationCoordinate: 12345959.33583,
        HeadingOfTruck : "SSE", // South south east
        Occupants : 1,
        DriverName : "N Lauda",
        DriverCellPhone : 1234567,

        isChemical : true,
        isCombustable : true, 
        isRadioactive : true, 
        IsVolatile : true, 
        ChemicalType : "Liquid Nitrogen",
        
        NumberOfPackages_7 : null,
        MethodOfSealing_8 : "Method",
        StaticNumber_10 : 101010,
        grossWeightKG_11 : 1000.00,
        VolumeInCM3_12 : 1000.50,
        InstructionsFromSender_13 : "Instructions from sender...",

        TruckType : "truck Type", 
        TruckOwnerCompany_16 : "truck owner company", // vervoerder
        TruckFuelType: "truck fuel type",
        LicensePlate : "45-33-ta-ff",
        IsInsured: true,
        LastAPKDate : "26-12-1994",

        hasMultipleChemicals : true,
        MultipleChem : {
            type1 : "chemical 1",
            type2 : "chemical 2",
            type3 : "chemical 3"
        },
        sent: false,
    };

    onEmergency = () => {
        this.setState({...this.state, sent: true});

        this.props.sendEmergency();
    };

    render() {
        return (
            <PageLayout>
                {this.state.sent ? <span className="notification danger">Emergency call sent!</span> : null}
                <div className="cmr-card">
                    <div className="row">
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">1. Sender</h4>
                                <p>Odyssey Chemical Transport</p>
                                <p>Energieweg 10</p>
                                <p>9743 AN Groningen</p>
                                <p>The Netherlands</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">CMR</h4>
                                <h4>INTERNATIONAL CONSIGNMENT NOTE</h4>
                                <p>This transport is, unless other specified, subject to the Convention on the Contract for the International Carriage of Goods by Road (CMR) </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">2. Destination</h4>
                                <p>Space</p>
                                <p>Milkyway 7</p>
                                <p>9743 AN Solar System</p>
                                <p>Galaxy</p>
                            </div>

                        </div>
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">6. Transporter</h4>
                                <p>Gas Transport Services B.V.</p>
                                <p>Concourslaan 17</p>
                                <p>9727 KC Groningen</p>
                                <p>The Netherlands</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">3. Delivery address</h4>
                                <p>Space</p>
                                <p>Milkyway 7</p>
                                <p>9743 AN Solar System</p>
                                <p>Galaxy</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">7. Followup transporters</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">4. Place and date of receiving goods</h4>
                                <br />
                                <br />
                                <br />
                            </div>
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">5. Documents/ Sender instructions</h4>
                                <br />
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">8. Followup transporters</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row fw">
                        <table>
                            <thead>
                                <tr>
                                    <th>9. Marks and Nos</th>
                                    <th>10. Number of packages</th>
                                    <th>11. Method of packing</th>
                                    <th>12. Nature of goods</th>
                                    <th>13. Gross weight in KG</th>
                                    <th>14. Volume in m3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3271</td>
                                    <td>15</td>
                                    <td>Cans</td>
                                    <td>ETHERS, N.O.S.</td>
                                    <td>200KG</td>
                                    <td>20m3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col ">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">15. Special agreement between the sender and the carrier</h4>
                            </div>
                        </div>
                        <div className="col">
                            <table>
                                <thead>
                                <tr>
                                    <th>16. To be paid</th>
                                    <th>Sender</th>
                                    <th>Consignee</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Carriage charges</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Supplementary</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Custom duties</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Other charges</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">17. Other usefull particulars</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">18. Other usefull particulars</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row fw">
                        <div className="cmr-part">
                            This carriage is subject, notwithstanding any clause to the contrary, to the Convention on the Contract for the international
                            Carriage of Goods by Road (CMR)
                        </div>
                    </div>
                    <div className="row fw">
                        <div className="cmr-part">
                            <h4 className="cmr-part-title">19. Established in</h4>
                        </div>
                    </div>
                    <div className="row triple">
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">20. Signature or stamp of sender</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">21. Signature or stamp of carrier</h4>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cmr-part">
                                <h4 className="cmr-part-title">22. Goods received</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="emergency-container">
                    <button onClick={this.onEmergency} className="App-button danger">EMERGENCY!</button>
                </div>

            </PageLayout>
        );
    }
}

function mapDispatchToProps() {
    const emergencyAction = EmergencyAction.getInstance();
    return {
        sendEmergency: () => dispatch => {
            emergencyAction.send(dispatch);
        }
    }
}

export default connect(null, mapDispatchToProps())(CmrPage);

