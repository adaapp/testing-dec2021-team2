import logo from './logo.svg';
import './App.css';
//  imported hooks
import { useState, useEffect } from 'react';

// function that deals with all of this. 
function App() {
	let [hex, setHex,] = useState('');
	const [r, setR] = useState(0);
	const [g, setG] = useState(0);
	const [b, setB] = useState(0);
	function convertRGB(r, g, b) {
		console.log(r, g, b);
		const rgb = (r << 16) | (g << 8) | (b << 0);
		setHex('#' + (0x1000000 + rgb).toString(16).slice(1));
	}

	// sets the value for the r, g, and b variables whenerver you change a value on the input. <input>

	// max value set to 255
	function changeR(e) {
		if (e.target.value > 255 || e.target.value < 0) {
			e.target.value = 255;
			setR(255);
		} else {
			setR(e.target.value)
		}
	}

	function changeG(e) {
		if (e.target.value > 255 || e.target.value < 0) {
			e.target.value = 255;
			setG(255);
		} else {
			setG(e.target.value)
		}
	}

	function changeB(e) {
		if (e.target.value > 255 || e.target.value < 0) {
			e.target.value = 255; 
			setB(255);
		} else {
			setB(e.target.value)
		}
	}

	useEffect(() => { convertRGB(r, g, b); }, [r, g, b])

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
				<h1>{hex}</h1>
				<div style={{ backgroundColor: hex, width: 200, height: 200 }}></div>
				<form>
					<label>
						R:
						<input id="myInput" type="number" name="r" onChange={changeR} />
					</label>
					<label>
						G:
						<input type="number" name="g" onChange={changeG} />
					</label>
					<label>
						B:
						<input type="number" name="b" onChange={changeB} />
					</label>
				</form>
			</header>

		</div>
	);
}

function Launch() {
	window.open("https://affectionate-gates-a740a1.netlify.app/?")
}

export default App;
