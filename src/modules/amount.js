import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const amountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        calculate: (state, { payload }) => {
            state.value += payload
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export const { calculate, reset } = amountSlice.actions

export default amountSlice.reducer