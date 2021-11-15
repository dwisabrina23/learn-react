import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: "form",
    initialState: {
        forms: null,
    },
    reducers: {
        wasValidateData: (state, action) => {
            state.forms = action.payload
        },
        resetForm: (state, action) => {
            state.forms = null
        }
    }
})

export const { wasValidateData, resetForm} = formSlice.actions

export default formSlice.reducer