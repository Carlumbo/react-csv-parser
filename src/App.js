import React, { Component } from 'react';
//import { CSVReader } from "react-papaparse"; 
import logo from './logo.png';
import './App.css';
//import { writeFileSync, readFileSync } from 'fs';
//import './test.js';

const Papa = require("papaparse");
const dataFilePath = require("./test.csv");
Papa.parse(dataFilePath, {
  download:true, 
  header: true,
  delimiter: ",",
  newline: ",",
})
  console.log(dataFilePath)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'M ALWAYS WATCHING!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
    </div>
    
  );
}

export default App;
