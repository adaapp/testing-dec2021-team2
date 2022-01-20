import React from 'react'
import { useState } from 'react';
import '../App.css';
import { convertRGB, cleanString, convertHex } from './formFunctions';

// function that deals with all of this. 
export default function Form() {
	let [hex, setHex] = useState('');
	let [rgb, setRGB] = useState(['', '', '']);

	function change(value, index) {
		let current = rgb;
		let number = parseInt(value);

		current[index] = (value > 255 || value < 0) || value.length > 3 ? 
			'255' : isNaN(number) ? '' : rgb[index] === '0' ? 
				number.toString() : cleanString(value);

		setRGB(current);
		updateHex();
	}

	function changeHex(e) {
		let converted = convertHex(e.target.value);
		
		setHex(e.target.value);
		setRGB(converted);
	};

	function updateHex() {
		setHex(
			convertRGB(
				cleanString(rgb[0]), 
				cleanString(rgb[1]), 
				cleanString(rgb[2])
			)
		);
	};

    return (
        <div className="App">
			<label>
				 Hex:<input data-testid="hex" value={hex} name="r" onChange={changeHex}/>
			</label>

				<div data-testid="preview" className="Preview" style={{ backgroundColor: hex }}></div>
				<form>
					<label data-testid="r">
						R:<input data-testid="rInput" style={{width: '100px'}} value={rgb[0]} onBlur={(e) => {if(e.target.value.length === 0) e.target.value = '0'}}
								onChange={(e) => {change(e.target.value, 0)}} name="r"/>
					</label>
					<label data-testid="g">
						G:<input data-testid="gInput" style={{width: '100px'}} value={rgb[1]} onBlur={(e) => {if(e.target.value.length === 0) e.target.value = '0'}}
								onChange={(e) => {change(e.target.value, 1)}} name="g"/>
					</label>
					<label data-testid="b">
						B:<input data-testid="bInput" style={{width: '100px'}} value={rgb[2]} onBlur={(e) => {if(e.target.value.length === 0) e.target.value = '0'}}
								onChange={(e) => {change(e.target.value, 2)}} name="b"/>
					</label>
				</form>
        </div>
    )
}