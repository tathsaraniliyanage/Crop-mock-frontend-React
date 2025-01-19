import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    vehicles: [],
};

    export const VehicleSlice = createSlice({
    name:'vehicles',
    initialState,
      reducers:{
        addVehicle: (state, action) => {
            state.vehicles.push(action.payload);
        },
        updateVehicle: (state, action) => {
            state.vehicles = action.payload;
        },
        deleteVehicle: (state, action) => {
            state.vehicles.splice(state.vehicles.indexOf(action.payload), 1);
            }
     }

})


export const { addVehicle,updateVehicle,deleteVehicle } = VehicleSlice.actions;
export default VehicleSlice.reducer;