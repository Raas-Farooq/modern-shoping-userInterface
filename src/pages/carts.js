import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";



const Carts = () => {

    const [allCarts, setAllCarts] = useState([]);
    
    function shortText(text){

        const splitText = text.split(' ');
        const words = splitText.slice(0, 3);
        const newText = words.join(' ');
        return splitText.length > 4 ? newText + '..' : newText
    }

    
    useEffect(() => {
        const getStoredCarts = () => {
          const storedData = localStorage.getItem('boughtItems');
          if (storedData) {
            try {
              let parsedData = JSON.parse(storedData);
              console.log("parsedData: ", parsedData);
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
        console.log("All Carts: ", allCarts);
      }, [allCarts]);


    return(
        <div>
            <h1> Carts </h1>
            
            {allCarts.map(cart => 
                
                {
                    {console.log("cart: ", cart)}
                    return(
                        <div key={cart.id} >
                
                            {/* <h3> {shortText(cart.title)}</h3> */}
                
                            <img src={cart.image} style={{width:'250px', height:'250px'}} alt={cart.title} />
                            <h5> {cart.category} </h5>
                            <h6> {cart.price} </h6>
                        </div>
                    )
                    
                       
                    
                }
            )}
        </div>
    )
}

export default Carts