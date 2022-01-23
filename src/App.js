import React from "react";
import './App.css';
import Bulb from './components/Bulb.js';

function App() {
  
  return(
    <div className="box">
    <div className="row">
	  <Bulb />
    <Bulb />
    
    </div>
    </div>
  );
}


export default App;


