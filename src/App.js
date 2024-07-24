import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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
>>>>>>> feature/testingRedux
  );
}

export default App;
