








// import React from 'react';

// import ReactDOM from 'react-dom/client';

// import './index.css';

// import App from './App';

// import reportWebVitals from './reportWebVitals';

// // import GlobalState from './globalContext/context';

// import { BrowserRouter } from 'react-router-dom';

// import { Provider } from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(

// <React.StrictMode>

// <BrowserRouter>

// <GlobalState>

// <App />

// </GlobalState>

// </BrowserRouter>

// </React.StrictMode>

// );

// // If you want to start measuring performance in your app, pass a function

// // to log results (for example: reportWebVitals(console.log))

// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

// context js:

// import React,{useContext,createContext, useCallback, useState, useEffect} from "react";

// import App from "../App";

// const AppContext = createContext();

// const GlobalState = ({children}) => {

// const [totalAmount, setTotalAmount] = useState(0);

// const [totalCartItems, setTotalCartItems] = useState('');

// const [loading, setLoading] = useState(false);

// const [err, setError] = useState(null);

// const [cartProducts, setCartProducts] = useState([]);

// const fetchCarts = useCallback(async () => {

//  setLoading(true);

//  setError(null);

// try{

// const response = await fetch(`https://fakestoreapi.com/products`);

// if(!response.ok){

//  console.log("response Error");

// throw new Error('There is something went wrong while fetching')

//  }

// const products = await response.json();

//  setCartProducts(products);

//  }

// catch(err){

//  console.log("Error occured while fetching");

//  setError(true)

//  }

// finally{

//  setLoading(false)

//  }

//  }, [])

//  useEffect(() => {

//  fetchCarts();

// // console.log('myProducts: ', cartProducts)

//  }, [fetchCarts])

// return <AppContext.Provider value={{

//  cartProducts,

//  loading,

//  err,

//  setTotalCartItems,

//  totalCartItems,

//  totalAmount,

//  setTotalAmount

//  }}>

// {children}

// </AppContext.Provider>

// }

// export const useGlobalState = () => {

// return useContext(AppContext)

// }

// export default GlobalState

// app.js:

// // import { Provider } from 'react-redux';

// import Home from './home.js';

// import Carts from './pages/cartsPage.js';

// // import Gamer from './home';

// import { BrowserRouter, Route,Routes } from 'react-router-dom';

// import Navbar from './Components/Navbar.js';

// function App() {

// return (

// <div>

// <Navbar />

// <Routes>

// <Route path="/" element={<Home />}></Route>

// <Route path="/carts" element={<Carts />} />

// </Routes>

// </div>

//  );

// }

// export default App;

// these are some of the other components. i realized that if i add redux and then keep