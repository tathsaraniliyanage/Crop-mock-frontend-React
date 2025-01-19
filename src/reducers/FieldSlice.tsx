import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    fields: [],
};

export const fieldSlice = createSlice({
    name: "fields",
    initialState,
    reducers: {
        saveField(state, action) {
            state.fields.push(action.payload);
        },
        removeField(state, action) {
            state.fields = state.fields.filter((_, index) => index !== action.payload);
        },
        updateField(state, action) {
            const { index, updatedField } = action.payload;
            if (index >= 0 && index < state.fields.length) {
                state.fields[index] = { ...state.fields[index], ...updatedField };
            }
        },
    },
});

export const { saveField, removeField, updateField } = fieldSlice.actions;
export default fieldSlice.reducer;
