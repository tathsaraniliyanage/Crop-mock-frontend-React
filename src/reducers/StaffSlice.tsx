import {createSlice} from "@reduxjs/toolkit";

export const initialState={
    staff:[],
};
export const staffSlice = createSlice({
    name:'staff',
    initialState,
    reducers:{
        addStaff:(state,action)=>{
            state.staff.push(action.payload);
        },
        removeStaff:(state,action)=>{
            state.staff.splice(action.payload,1);
        },
        updateStaff:(state,action)=>{
            state.staff.splice(action.payload,1);
        }
    }
})
export const {addStaff, removeStaff,updateStaff} = staffSlice.actions;
export default staffSlice.reducer;