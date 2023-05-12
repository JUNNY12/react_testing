import logo from './logo.svg';
import './App.css';

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

      <h1 data-testid = 'mytestid'>
        Junny is Good
      </h1>
      <span title='sum'>{a + b}</span>
    </div>
  );
}

export default App;
