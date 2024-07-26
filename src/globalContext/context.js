import React,{useContext,createContext, useCallback, useState, useEffect} from "react";
import App from "../App";

const AppContext = createContext();


const GlobalState = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [err, setError] = useState(null);
    const [cartProducts, setCartProducts] = useState([]);

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

            setCartProducts(products);
           

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

        // console.log('myProducts: ', cartProducts)
    }, [fetchCarts])

    return <AppContext.Provider value={{
        cartProducts,
        loading,
        err
    }}>
        {children}
    </AppContext.Provider>


}

export const useGlobalState = () => {
    return useContext(AppContext)
}

export default GlobalState