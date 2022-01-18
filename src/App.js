import logo from './logo.svg';
import './App.css';
// imported hooks
import { useState, useEffect } from 'react';

function App() {
	let [hex, setHex,] = useState('');
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
				<form>
				<label>
					R:
					<input type="number" name="r" />
				</label>
				<label>
					G:
					<input type="number" name="g" />
				</label>
				<label>
					B:
					<input type="number" name="b" />
				</label>
				<input type="submit" value="Submit" />
			</form>
			</header>
		
		</div>
	);
}

function Launch() {
	window.open("../public/index.html")
}

export default App;
