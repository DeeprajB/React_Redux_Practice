import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
    name: 'amount',
    initialState: 0,
    reducers: {
        Increment: (state) => {
            return (
                state += 1
                )
        },
        Decrement: (state) => {
            return (
                state -= 1
                )
        },
        IncrementByValue: (state,action) => {
            return (
                state += action.payload
                )
        },
    }
})

export const {Increment,Decrement,IncrementByValue} = amountSlice.actions
export default amountSlice.reducer;