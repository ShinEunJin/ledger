import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 0
}

export const amountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        insert: (state, { payload }) => {
            state.amount += payload
        }
    }
})

export const { insert } = amountSlice.actions

export default amountSlice.reducer