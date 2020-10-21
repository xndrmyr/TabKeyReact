import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import {
    clear,
    tuneTo,
 } from "./tuningSlice"
import {
  reset
} from "./scaleSlice"

 import {
  dropped,
} from "./dropSlice"

import React, {
    useState
  } from 'react';

function TuningSelect() {

    const [tuningName, setTuningName] = useState("standard");
    const dispatch = useDispatch();

    const chosen = {
    color: "#04f06a",
    backgroundColor: "rgba(32, 32, 32, .5)",
    borderColor: "#015024",
    }

    const unchosen = {
    color: "#fefffe",
    }

function TuningButton(props) {
  return (
  <a href="#guitarAnchor"><button id={props.tuningName} className={props.className} style={tuningName === props.tuningName ? chosen : unchosen} onClick={props.onClick} value={props.value}>
      
      <div className="inner"><strong>{props.span}</strong>
  <span>{props.inner}</span></div>

  </button>
        </a>
  )
}




  //  Guitar Tunings
    function standard(){
      dispatch(clear())
      dispatch(reset())
      dispatch(tuneTo(["E", "A", "D", "G", "B", "e", 4]))
      setTuningName("standard")
      dispatch(dropped(0))
    }
    function halfStep(){
      dispatch(clear())
      dispatch(reset())
      dispatch(tuneTo(["Eb", "Ab", "Db", "Gb", "Bb", "eb", 3]))
      setTuningName("halfStep")
      dispatch(dropped(0))
    }
    function wholeStep(){
      dispatch(clear())
      dispatch(reset())
      dispatch(tuneTo(["D", "G", "C", "F", "A", "d", 2]))
      setTuningName("wholeStep")
      dispatch(dropped(0))
    }
    function dropD(){
      dispatch(clear())
      dispatch(reset())
      dispatch(tuneTo(["D", "A", "D", "G", "B", "e", 4]))
      setTuningName("dropD")
      dispatch(dropped(2))

    }
    function dropCSharp(){
      dispatch(clear())
      dispatch(reset())
      dispatch(tuneTo(["C#", "A#", "C#", "F#", "A#", "d#", 3]))
      setTuningName("dropCSharp")
      dispatch(dropped(2))

    }
    function dropC(){
      dispatch(clear())
      dispatch(reset())
      dispatch(tuneTo(["C", "G", "C", "F", "A", "d", 2]))
      setTuningName("dropC")
      dispatch(dropped(2))
 
    }
    

    return (
      <div id="wrapperGuitarTuning">
        <div className="tuning-row">
        <TuningButton tuningName="standard" className="tuningButton" onClick={standard} span="Standard" inner="E A D G B e" />
        <TuningButton tuningName="halfStep" className="tuningButton" onClick={halfStep} span="Half-step down" inner="Eb Ab Db Gb Bb eb" />
        <TuningButton tuningName="wholeStep" className="tuningButton" onClick={wholeStep} span="Whole-step down" inner="D G C F A d" />
        <TuningButton tuningName="dropD" className="tuningButton" onClick={dropD} span="Drop D" inner="D A D G B e" />
        <TuningButton tuningName="dropCSharp" className="tuningButton" onClick={dropCSharp} span="Drop C#" inner="C# G# C# F# A# d#" />
        <TuningButton tuningName="dropC" className="tuningButton" onClick={dropC} span="Drop C" inner="C G C F A d" />
      </div>
      <div className="cell"></div>
      </div>
    )
    }
    

  export default TuningSelect;
