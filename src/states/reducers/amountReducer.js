import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
    name: 'amount',
    initialState: 0,
    reducers: {
        Increment: (state,action) => {
            return (
                state += 1
                )
        },
        Decrement: (state,action) => {
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