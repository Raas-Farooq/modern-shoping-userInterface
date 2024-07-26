
// import { Provider } from 'react-redux';
import Home from './home.js';
import Carts from './pages/carts.js';
// import Gamer from './home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.js';


function App() {
  return (
   <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carts" element={<Carts />} />
      </Routes>
    
   </div>
   

  );
}

export default App;
