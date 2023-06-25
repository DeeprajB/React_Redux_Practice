import { createSlice } from "@reduxjs/toolkit";

export const bonusSlice = createSlice({
    name: 'bonus',
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
    }
})

export const {Increment,Decrement} = bonusSlice.actions
export default bonusSlice.reducer;