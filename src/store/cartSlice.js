import { createSlice } from "@reduxjs/toolkit";




let initialItems= JSON.parse(localStorage.getItem('boughtItems')) || [];


const productsSlice = createSlice({
    name:'cart',
    initialState:{
        products:initialItems
    },
    reducers:{
        addToCart: (state, action) => {
            state.products.push(action.payload);
            localStorage.setItem('boughtItems', JSON.stringify(state.products))
        }
        ,
        removeFromCart: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
            localStorage.setItem('boughtItems', JSON.stringify(state.products))
        }
    }
})

    export const {addToCart, removeFromCart} = productsSlice.actions
    
    export default productsSlice.reducer;

    // question: how does the state is being recognized outside the productsSlice

    
    export const productsList = state => state.cart.products
    export const isProductSaved = (id) => state => state.cart.products.some(product => product.id === id);

    







// export const selectIsInCart = id => state => {
//   // Check if state.cart and state.cart.items exist
//   return state.cart && state.cart.items 
//     ? state.cart.items.some(item => item && item.id === id)
//     : false;
// };