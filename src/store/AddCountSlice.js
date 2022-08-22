import { createSlice } from "@reduxjs/toolkit";



const AddCountSlice = createSlice({
    name: "addcounter",


    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)

        },
        remove(state, action) {
            state.filter(item => {

                return item.id !== action.payload
            }
            )
        }




    }


})

export const { add, remove } = AddCountSlice.actions
export default AddCountSlice.reducer;