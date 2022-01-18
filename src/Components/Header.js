import React from 'react'
import '../App.css';
import logo from "../Images/Colourwheel.png"

function Launch() {
  window.open("https://github.com/adaapp/testing-dec2021-team2")
}

export default function Header() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Team 2: Colour Converter</h2>
          <form>
            <button className="Launch-Button" onClick={Launch}>See Project Files! 🚀</button>
          </form>
        </header>
      </div>
    )
}