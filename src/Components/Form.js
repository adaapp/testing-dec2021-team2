import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css';
import convertRGB from './formFunctions';

// function that deals with all of this. 
export default function Form() {
	let [hex, setHex] = useState('');
	const [r, setR] = useState(0);
	const [g, setG] = useState(0);
	const [b, setB] = useState(0);

	function changeR(e) { 
		if (e.target.value > 255 || e.target.value < 0) {
			e.target.value = 255;
			setR(255);
		} else {
			setR(e.target.value)
		}
		
	};

	function changeG(e) { 
		if (e.target.value > 255 || e.target.value < 0) {
			e.target.value = 255;
			setG(255);
		} else {
			setG(e.target.value)
		}
	 };

	function changeB(e) { 
		if (e.target.value > 255 || e.target.value < 0) {
			e.target.value = 255; 
			setB(255);
		} else {
			setB(e.target.value)
		} 
	};

	useEffect(() => { setHex(convertRGB(r, g, b)); }, [r, g, b])

    return (
        <div className="App">
            <h1 data-testid="hex">{hex}</h1>
				<div data-testid="preview" className="Preview" style={{ backgroundColor: hex}}></div>
				<form>
					<label data-testid="r">
						R:
						<input type="number" name="r" max="255" min="0" onChange={changeR} />
					</label>
					<label data-testid="g">
						G:
						<input type="number" name="g" max="255" min="0" onChange={changeG} />
					</label>
					<label data-testid="b">
						B:
						<input type="number" name="b" max="255" min="0" onChange={changeB} />
					</label>
				</form>
        </div>
    )
}