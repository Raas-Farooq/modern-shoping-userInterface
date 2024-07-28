import { createSlice } from "@reduxjs/toolkit";



// const startItems = () => {
//   let items = localStorage.getItem('boughtItems') || [];

//   try{
//     if(items);
     
//   }
// }

// const initialItems = (() => {
//   let items = localStorage.getItem('boughtItems');
//  console.log("initial items check: ", items);
//   try{
//     items = JSON.parse(items);
//     if(items){
//       items = items.filter(item => item != null);
//     }
//     return items
//   }
//   catch(err){
//     console.log("unable to fetch items from localStorage");
//     return []
//   }
// })();

// console.log("outside initiaItems: ", initialItems);

// const cartItemsSlice = createSlice({
//     name:'cart',
//     initialState:
//     {
//       items: initialItems
//     },
//     reducers:{
//         addToCart:(state, action) => {
//           console.log('Current state:', state);
//           console.log('Action payload:', action.payload);
//             const newItem = state.items.find(item => item.id === action.payload.id);
//             if(!newItem){
//               state.items.push(action.payload);
//             }
            
//             localStorage.setItem('boughtItems', JSON.stringify(state.items))
//         },
//         removeFromCart: (state, action) => {
//             state.items = state.items.filter(item => item.id !== action.payload);
//             // state.items.push(newItems);
//             localStorage.setItem('boughtItems', JSON.stringify(state.items))
//         }
//     }
// })


// export const {addToCart, removeFromCart} = cartItemsSlice.actions
// export default cartItemsSlice.reducer

// export const selectIsInCart = id => state => {
//   // Check if state.cart and state.cart.items exist
//   return state.cart && state.cart.items 
//     ? state.cart.items.some(item => item && item.id === id)
//     : false;
// };
