import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import {
  give,
  back,
  reset,
} from "./scaleSlice"



import React, {
  useState
} from 'react';


function ButtonControl() {
  const theScale = useSelector(state => state.scale)
  const dispatch = useDispatch();
  const tuning = useSelector(state => state.tuning)
  const [scale, setScale] = useState([])

  function handleClick(event) {
    if (theScale.length > 6) {
      dispatch(reset())
      document.getElementById("oneStepButton").disabled = false
      document.getElementById("twoStepButton").disabled = false
    }
    dispatch(give(event.target.innerHTML))
    setScale(scale.concat(event.target.innerHTML * 1))
  }


  function handleReset() {
    document.getElementById("oneStepButton").disabled = false
    document.getElementById("twoStepButton").disabled = false
    dispatch(reset())
  }

  function handleBackspace() {
    if (theScale.length > 0) {
      dispatch(back())
    }
  }

  //Check for input that makes invalid scales
  for (var i = 0; i < theScale.length; i++) {
    if (theScale[i] - theScale[i - 1] === 1) {
      document.getElementById("oneStepButton").disabled = true
      document.getElementById("twoStepButton").disabled = false
    } else if (theScale[i] - theScale[i - 1] === 2 && theScale[i - 1] - theScale[i - 2] === 2 && theScale[i - 2] - theScale[i - 3] === 2) {
      document.getElementById("twoStepButton").disabled = true
      document.getElementById("oneStepButton").disabled = false
    } else {
      document.getElementById("oneStepButton").disabled = false
      document.getElementById("twoStepButton").disabled = false
    }
  }



  if (theScale.length === 7) {
    document.getElementById("oneStepButton").disabled = false
    document.getElementById("twoStepButton").disabled = false
  }

  return (
    <div id="buttonWrapper">
      <div id="stepButtonWrapper">
        <button id="oneStepButton" className="userButton" onClick={handleClick} value={1}>
          {theScale.length === 0 || !theScale[0] || theScale.length === 7 ? 0 : (parseInt(theScale[theScale.length - 1]) + 1)}
        </button>
        <button id="twoStepButton" className="userButton" onClick={handleClick} value={2}>
          {theScale.length === 0 || !theScale[0] || theScale.length === 7 ? 1 : (parseInt(theScale[theScale.length - 1]) + 2)}
        </button>
      </div>
      <div id="correctionControls">
        <button id="resetButton" onClick={handleReset}>Reset</button>
        <button id="backspaceButton" onClick={handleBackspace} ><i className="fas fa-caret-left"></i></button>
        <button id="toTopButton"><a href="#top"><div><i className="fas fa-caret-up"></i></div></a></button>
      </div>
    </div>
  );
}


export default ButtonControl;

