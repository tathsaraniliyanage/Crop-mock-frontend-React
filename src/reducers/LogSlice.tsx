
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    logs: [],
};

export const logSlice = createSlice({
    name: "logs",
    initialState,
    reducers: {
        saveLog(state, action) {
            state.logs.push(action.payload);
        },
        removeLog(state, action) {
            state.logs = state.logs.filter((_, index) => index !== action.payload);
        },
        updateLog(state, action) {
            const { index, updatedLog } = action.payload;
            if (index >= 0 && index < state.logs.length) {
                state.logs[index] = { ...state.logs[index], ...updatedLog };
            }
        },
    },
});

export const { saveLog, removeLog, updateLog } = logSlice.actions;
export default logSlice.reducer;
