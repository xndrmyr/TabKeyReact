import '../App.css';

import React, {
  useState
} from 'react';

function ViewToggle() {
    const [neckIsTrue, setNeckIsTrue] = useState(false)
    const [trueStyle, setTrueStyle] = useState("falseStyle")
    const [toggleClass, setToggleClass] = useState("tabView")
  
  
    function handleClick() {
  
      if (neckIsTrue === true) {
        setToggleClass("tabView")
        setTrueStyle("falseStyle")
        setNeckIsTrue(false)
      } else {
        setToggleClass("neckView")
        setTrueStyle("trueStyle")
        setNeckIsTrue(true)
      }
    }
  
    console.log(neckIsTrue)
    console.log(trueStyle)
    console.log(toggleClass)
  
    return(
    <div id="viewSelect"><span>Neck</span>
    <div id="toggleWrapper" className={trueStyle} onClick={handleClick}>
      <div id="toggleSwitch"></div>
    </div>
    <span>Tab</span>
    </div>
    );
  }

  export default ViewToggle;