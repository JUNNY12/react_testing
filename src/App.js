import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Greeting } from './components/Greeting';
import { Currency } from './components/Currency';


function App() {
  const a = 2
  const b = 4
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://Junny.com"
          target="_blank"
          rel="noopener noreferrer"
          data-testid='learn-link'
        >
          Junny 
        </a>
      </header>

      <ul>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
      </ul>

      <h1>
        <Greeting />
      </h1>

      <h2><Currency amount={2000} /></h2>

      <h1 data-testid = 'mytestid'>
        Junny is Good
      </h1>
      <span title='sum'>{a + b}</span>
      <Login />
    </div>
  );
}

export default App;
