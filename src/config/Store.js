import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../store/productSlice";
import AddSlice from "../store/AddSlice";
import CountSlice from '../store/CountSlice';
import AddCountSlice from '../store/AddCountSlice';


const store = configureStore({
    reducer: {

        product: productSlice,
        cardAdd: AddSlice,
        counter: CountSlice,
        addcounter:AddCountSlice


    }
})
export default store