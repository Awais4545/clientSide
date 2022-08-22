import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const STATUS = Object.freeze({
    IDLE: "idle",

    LOADING: "loading",
    ERROR: "error",
})




const AddSlice = createSlice({
    name: "cartAdd",


    initialState: {
        data: [],
        status: STATUS.IDLE,
    },
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state, action) => {
                state.status = STATUS.LOADING
            }
            )
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUS.IDLE
            }
            )
            .addCase(fetchCart.rejected, (state, action) => {
                state.status = STATUS.ERROR
            }
            )

    }


})

export default AddSlice.reducer;

export const fetchCart = createAsyncThunk("fetch/Cart",
    async () => {
        const baseURL = process.env.REACT_APP_BASEURL;


        const res = await axios.get(`${baseURL}/carts/getCart`)
        const data = res.data;


        return data;

    }
)