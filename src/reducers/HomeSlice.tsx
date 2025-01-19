import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    home: [],
};

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        // saveHome(state, action) {
        //     state.home.push(action.payload);
        // },
    },
});

export const {  } = homeSlice.actions;
export default homeSlice.reducer;
