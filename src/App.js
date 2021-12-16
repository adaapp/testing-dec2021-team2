import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Team 2: Colour Converter</p>
        <form>
          <button className="Launch-Button" onClick={Launch}>Launch Project! 🚀</button>
        </form>
        <a
          className="App-link"
          href="https://github.com/adaapp/testing-dec2021-team2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find our project here!
        </a>
      </header>
    </div>
  );
}

function Launch() {
  window.open("https://www.google.com/")
}

export default App;
