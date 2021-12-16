import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css';

// function that deals with all of this. 
export default function Form() {
	let [hex, setHex] = useState('');
	const [r, setR] = useState(255);
	const [g, setG] = useState(255);
	const [b, setB] = useState(255);
	function convertRGB(r, g, b) {
		const rgb = (r << 16) | (g << 8) | (b << 0);
    setHex( '#' + (0x1000000 + rgb).toString(16).slice(1));
	}

	function changeR(e) { setR(e.target.value) }
	function changeG(e) { setG(e.target.value) }
	function changeB(e) { setB(e.target.value) }
	useEffect(() => { convertRGB(r, g, b); }, [r, g, b])

    return (
        <div className="App">
            <h1>{hex}</h1>
				<div className="Preview" style={{ backgroundColor: hex}}></div>
				<form>
					<label>
						R:
						<input type="number" name="r" max="255" min="0" onChange={changeR} />
					</label>
					<label>
						G:
						<input type="number" name="g" max="255" min="0" onChange={changeG} />
					</label>
					<label>
						B:
						<input type="number" name="b" max="255" min="0" onChange={changeB} />
					</label>
				</form>
        </div>
    )
}
