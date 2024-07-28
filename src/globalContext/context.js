import React,{useContext,createContext, useCallback, useState, useEffect} from "react";
import App from "../App";

const AppContext = createContext();


const GlobalState = ({children}) => {

    const [totalItems, setTotalItems] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState(null);
    const [allProducts, setAllProducts] = useState([]);


    useEffect(() => {

        let localStored = JSON.parse(localStorage.getItem('boughtItems')) || [];
        console.log("localStored in effect: ", localStored);
        
        if(localStored.length > 0){
            setCartItems(localStored)
        }
        console.log("cartItems Effect: ", cartItems);
    }, [])

    
    useEffect (() => {

        if(cartItems.length > 0){
            setTotalItems(cartItems.length)
            console.log("cart Items new useEffect", cartItems);
            const bill = cartItems.reduce((acc, product) => {
                const rupees = acc + product.price;
                return rupees;
            },0) 
            localStorage.setItem('boughtItems', JSON.stringify(cartItems))
            setTotalAmount(bill)
        }
       
    }, [cartItems])


    const fetchCarts = useCallback(async () => {
        setLoading(true);
        setError(null);

        try{
            const response = await fetch(`https://fakestoreapi.com/products`);

            if(!response.ok){
                console.log("response Error");
                throw new Error('There is something went wrong while fetching')
            }

            const products = await response.json();

            setAllProducts(products);
           

        }
        catch(err){
            console.log("Error occured while fetching");
            setError(true)
        }
        finally{
            setLoading(false)
        }
    }, []) 


    useEffect(() => {
        
        fetchCarts();

        // console.log('myProducts: ', AllProducts)
    }, [fetchCarts])


    const addToCart = (item) => {
        setCartItems(prev =>  [...prev, item])
        
    }

    const removeFromCart = (id) => {
        
       
        const product = allProducts.some(product => product.id === id);

        if(product){
            
            setCartItems(prev => prev.filter(prev => prev.id != id))
        }

        
    }

    const isInCart = (id) => cartItems.some(cart => cart.id === id)

    
    return <AppContext.Provider value={{
        allProducts,
        loading,
        err,
        cartItems,
        addToCart,
        removeFromCart,
        isInCart,
        totalAmount,
        totalItems
        // setTotalCartItems,
        // totalCartItems,
        // totalAmount,
        // setTotalAmount
    }}>
        {children}
    </AppContext.Provider>


}

export const useGlobalState = () => {
    return useContext(AppContext)
}

export default GlobalState