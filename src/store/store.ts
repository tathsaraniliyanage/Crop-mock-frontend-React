import {configureStore} from "@reduxjs/toolkit";
import vehicleReducer from "../reducers/VehicleSlice.tsx";
import equipmentReducer from "../reducers/EquipmentSlice.tsx"
import staffReducer from "../reducers/StaffSlice.tsx"
import cropReducer from "../reducers/CropSlice.tsx"
import fieldReducer from "../reducers/FieldSlice.tsx";
import logReducer from "../reducers/LogSlice.tsx";
import homeReducer from "../reducers/HomeSlice.tsx"

export const store=configureStore({
    reducer:{
        crops:cropReducer,
       vehicles:vehicleReducer,
        equipments:equipmentReducer,
        staff:staffReducer,
        fields:fieldReducer,
        logs:logReducer,
        // home:homeReducer,
    },
});
