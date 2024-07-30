import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalState } from "../globalContext/context";
import {productsList} from '../store/cartSlice.js';


const Carts = () => {
  // const {setTotalCartItems, totalCartItems, setTotalAmount, totalAmount} = useGlobalState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);


  const myProductsList = useSelector(productsList);
  
  
  function shortText(text) {
    const splitText = text.split(" ");
    const words = splitText.slice(0, 3);
    const newText = words.join(" ");
    return splitText.length > 4 ? newText + ".." : newText;
  }

  useEffect(() => {
    if(myProductsList.length){
      setTotalItems(myProductsList.length);
      const cost = myProductsList.reduce((acc, product) => {
        const itemPrice = acc + product.price;
        return itemPrice  
      },0)

      setTotalPrice(cost.toFixed(2))
    }
    

  }, [productsList]);

  return (
    <div >
      <div>
        <h5> <span style={{color:'blue'}}>total Items : {totalItems} </span></h5>
        <h5><span style={{color:'blue'}}> total Amount : ${totalPrice} </span></h5>
      </div>
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {/* {console.log("allCarts: ", allCarts)} */}
        {myProductsList.map((cart) => {
          // {console.log("cart: ", cart)}
          return (
            <div
              key={cart.id}
              style={{
                boxShadow: "0 2px 5px",
                textAlign: "center",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "20%",
              }}
            >
              <h3> {shortText(cart.title)}</h3>

              <img
                src={cart.image}
                style={{ width: "250px", height: "250px" }}
                alt={cart.title}
              />
              <h5> {cart.category} </h5>
              <h6> ${cart.price} </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carts;
