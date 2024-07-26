import React from "react";
import { useGlobalState } from "./globalContext/context";
import CartList from "./productList/cartList";
// import Carts from "./pages/carts";
import { Link } from "react-router-dom";

const Home = () => {

  const {cartProducts, loading, err} = useGlobalState();
  

  if(err){
    return <div> <h3> {err} </h3></div>
  }


  return (
    <div>
      <div>
        {!loading ? (
          <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'20px'}}>
            {cartProducts.map(cart => 
              <CartList cart={cart} allProducts={cartProducts} />
            )}
            
          </div>
        ):
        <h2> Loading </h2>
        }
      </div>
      
      
    </div>
  )
}

export default Home;




// import { useDispatch, useSelector } from "react-redux";

// const Gamer = () => {
//   const myState = useSelector((state) => state);
//   let dispatch = useDispatch();

  

//   const handleIncrease = (id) => {
//     dispatch({ type: "INC", id });
//   };

//   const handleDecrease = (id) => {
//     dispatch({type:'DEC', id})
//   }

//   const handleReset = (id) => {
//     dispatch({type:'CLEAN', id})
//   }

//   if (!Array.isArray(myState)) {
//     const arrayState = [];
//     arrayState = myState;
//     console.error('Expected myState to be an array, but got:', myState);
//     return <div>Error: Unexpected state format</div>;
//   }

//   return (
//     <div>
//       {myState.map((list) => (
        
//         <div key={list.id}>
//           <h4>{list.company} </h4>
//           <h6> {list.count} </h6>
//           <button onClick={() => handleIncrease(list.id)}> Deposit {list.name}</button>
//           <button onClick={() => handleDecrease(list.id)}>Deduct {list.name} </button>
//           <button onClick ={() => handleReset(list.id)}> Reset {list.name} </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Gamer;
