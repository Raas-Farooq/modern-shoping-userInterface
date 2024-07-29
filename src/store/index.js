import { configureStore } from "@reduxjs/toolkit";
import productReducer from './cartSlice.js'


// question: where does the 'cart ' came from 

const store = configureStore({
    reducer:{
        cart:productReducer
    }
    
})

export default store