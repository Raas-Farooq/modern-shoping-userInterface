import React,{useContext,createContext, useCallback, useState, useEffect} from "react";
import App from "../App";

const AppContext = createContext();


const GlobalState = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [err, setError] = useState(null);
    const [allProducts, setAllProducts] = useState([]);


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
    }, [fetchCarts])

    useEffect(() => {
        if(allProducts.length >0 ){
            console.log("products Loaded")
        }
    }, [allProducts])

    
    return <AppContext.Provider value={{
        allProducts,
        loading,
        err,
    }}>
        {children}
    </AppContext.Provider>


}

export const useGlobalState = () => {
    return useContext(AppContext)
}

export default GlobalState