import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const amountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        insert: (state, { payload }) => {
            state.value += payload
        }
    }
})

export const { insert } = amountSlice.actions

export default amountSlice.reducer