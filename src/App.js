
// import { Provider } from 'react-redux';
import Home from './home.js';
import Carts from './pages/cartsPage.js';
// import Gamer from './home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.js';
import { Provider } from 'react-redux';
import store from './store/index.js'

function App() {
  return (
  <Provider store={store} >
     <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carts" element={<Carts />} />
      </Routes>
    
   </div>
  </Provider>
   

  );
}

export default App;
