import React, { useState } from "react";
import 'F:/bulb/src/App.css';

function Bulb() {
    const [style, setStyle] = useState(false);
    
    const toggle = () => {
  setStyle(!style)
  console.log("clicked");
  
    };
    return (
        <div>
	  <div>
    <div className={'cont ' + (style ? 'cont2':' ')}></div>
		<button className="button" onClick={toggle}>
		  {style ? "OFF" : "ON"}
		</button>
    
	  </div>
    </div>
  );
}

export default Bulb;

