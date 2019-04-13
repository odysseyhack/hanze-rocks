import React, {Component} from 'react';

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
        }
    }

    render() {
        return (
            <div>
            {/*    CMR data enzo hier */}
            </div>
        );
    }
}

export default CmrPage;

