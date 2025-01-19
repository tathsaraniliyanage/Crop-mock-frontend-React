import {createSlice} from "@reduxjs/toolkit";

export const initialState={
    equipments:[],
};
export const equipmentSlice = createSlice({
    name:'equipment',
    initialState,
    reducers:{
        addEquipment(state,action){
            state.equipments.push(action.payload);
        },
        updateEquipment(state,action){
            state.equipments=action.payload;
        },
        deleteEquipment(state,action){
            state.equipments.splice(state.equipments.indexOf(action.payload), 1);
        }
    }
})
export const {addEquipment, updateEquipment,deleteEquipment} = equipmentSlice.actions;
export default equipmentSlice.reducer;