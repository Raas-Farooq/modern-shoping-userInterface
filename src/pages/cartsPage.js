import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGlobalState } from "../globalContext/context";

const Carts = () => {
  const {setTotalCartItems, totalCartItems, setTotalAmount, totalAmount} = useGlobalState();
  const [allCarts, setAllCarts] = useState([]);
  // const [set]
  
  function shortText(text) {
    const splitText = text.split(" ");
    const words = splitText.slice(0, 3);
    const newText = words.join(" ");
    return splitText.length > 4 ? newText + ".." : newText;
  }

  useEffect(() => {
    const getStoredCarts = () => {
      const storedData = localStorage.getItem("boughtItems");
      if (storedData) {
        try {
          let parsedData = JSON.parse(storedData);
          // console.log("parsedData.length: ", parsedData.length);
          setTotalCartItems(parsedData.length);
          setAllCarts(parsedData);
        } catch (error) {
          console.error("Error parsing cart data:", error);
          setAllCarts([]);
        }
      } else {
        setAllCarts([]);
      }
    };

    getStoredCarts();
  }, []);
 
  useEffect(() => {
    if(allCarts){
     const getAmount = allCarts.reduce((acc, item) => {
      acc = acc + item.price
      console.log("acc reduce: ",acc);
      return acc;
     },0);

     console.log('getAmount: ', getAmount);
     setTotalAmount(getAmount.toFixed(2))
    }
    
    
  }, [allCarts, totalCartItems]);


  return (
    <div style={{display:"flex", gap:'10px'}}>
      <div style={{width:'15%'}}>
        <h5> <span style={{color:'blue'}}>total Items : {totalCartItems} </span></h5>
        <h5><span style={{color:'blue'}}> total Amount : {totalAmount} </span></h5>
      </div>
      {console.log("totalCartItems: ", totalCartItems)}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {allCarts.map((cart) => {
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
