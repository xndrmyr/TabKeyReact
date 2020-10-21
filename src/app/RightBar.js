import '../App.css';
import React, {
  useState
} from 'react';
import { useSelector } from "react-redux"



const RightBar = () => {
  const keyCheck = useSelector(state => state.keyCheck)
  const conv = useSelector(state => state.convScale[0])

  function Mode(props) {
    if (conv){
    return (
  <div className="modeCell">{keyCheck.refNotes[conv[props.value[0]]]} {keyCheck.refNotes[conv[props.value[1]]]} {keyCheck.refNotes[conv[props.value[2]]]} {keyCheck.refNotes[conv[props.value[3]]]} {keyCheck.refNotes[conv[props.value[4]]]} {keyCheck.refNotes[conv[props.value[5]]]} {keyCheck.refNotes[conv[props.value[6]]]}</div>
    )
    } else {
      return <div className="cell"></div>;
    }
  }

  
  
  console.log(conv)
  return (<div id="RightBar"><div id="rightWrapper">
    <div id="modesOf">
<span>Modes of {keyCheck.musicKey}</span></div>
<div className="cell"></div>
<div className="row">
  <div className="titleCell"><span>Ionian I (major)</span></div>
  <Mode value={[0,1,2,3,4,5,6]}/>
</div>
<div className="row">
  <div className="titleCell"><span>Dorian II</span></div>
  <Mode value={[1,2,3,4,5,6,0]}/>
</div>
<div className="row">

  <div className="titleCell"><span>Phyrigian III</span></div>
  <Mode value={[2,3,4,5,6,0,1]}/>
</div>
<div className="row">
  <div className="titleCell"><span>Lydian IV</span></div>
  <Mode value={[3,4,5,6,0,1,2]}/>
</div>
<div className="row">

  <div className="titleCell"><span>Mixolydian V</span></div>
  <Mode value={[4,5,6,0,1,2,3]}/>
</div>
<div className="row">
  <div className="titleCell"><span>Aeolian VI (minor)</span></div>
  <Mode value={[5,6,0,1,2,3,4]}/>
</div>
<div className="row">
  <div className="titleCell"><span>Locrian VII</span></div>
  <Mode value={[6,0,1,2,3,4,5]}/>
</div>
<div className="cell"></div>
    </div>
    </div>
    )
}


export default RightBar;