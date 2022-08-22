import { createSlice } from "@reduxjs/toolkit";



const CountSlice = createSlice({
    name: "counter",


    initialState: {
        value: 0,
        count: 0

    },
    reducers: {
        incremented(state, action) {
            state.count += 1
        },
        decreament(state, action) {
            state.count -= 1
        },




    }


})

export const { incremented, decreament } = CountSlice.actions
export default CountSlice.reducer;