import { createSlice } from "@reduxjs/toolkit"

export const calculateSlice = createSlice({
    name: 'calculate',
    initialState: {
        amount: 0
    },
    reducers: {
        add: (state, action) => {
            state.amount += action.payload
        },
        reset: (state) => {
            state.amount = 0
        }
    }
})

export const { add, reset } = calculateSlice.actions

export default calculateSlice.reducer