import { createSlice } from "@reduxjs/toolkit";

export const newSlice = createSlice({
    name: 'action',
    initialState: 10,
    reducers: {
        Action: (state,action) => {
            console.log("Access the state using "+state)
            console.log("Perform action on state using "+action.payload)
            return (
                state += action.payload
                )
        },
    }
})

export const {Action} = newSlice.actions
export default newSlice.reducer;