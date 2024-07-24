import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Gamer from './counter';

function App() {
  return (
   <Provider store={store}>
    <div className="App">
      <Gamer />
    </div>
    </Provider>
  );
}

export default App;
