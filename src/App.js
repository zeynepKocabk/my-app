import logo from './logo.svg';
import './App.css';
import {Header} from'./components/Header.js';// eğer compunent default değilse import ederken süslü parantez kullanılır
import List from'./components/List.js'; // eğer component default is import ederken süslü parantez kullanılmaz
import Get from './services/Get.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List />
        <Header />
        <Get />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="My-touch">MY TOUCH HERE</p>
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
  );
}

export default App;
