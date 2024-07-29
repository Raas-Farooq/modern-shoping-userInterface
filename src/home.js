import React, {useEffect} from "react";
import { useGlobalState } from "./globalContext/context";
import CartList from "./productList/cartList";
// import Carts from "./pages/carts";
import { Link } from "react-router-dom";
import { clearAllListeners } from "@reduxjs/toolkit";

const Home = () => {

  const {allProducts, loading, err} = useGlobalState();
  
  if(err){
    return <div> <h3> {err} </h3></div>
  }

  return (
    <div>
      <div>
        {!loading ? (
          <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'20px'}}>
            {allProducts.map(cart => 
              <CartList cart={cart} allProducts={allProducts} />
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




