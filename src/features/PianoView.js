import '../App.css';
import { useSelector, useDispatch } from "react-redux";

import {
  give, remove, reset, sort
} from "./scaleSlice"
import React, {
  useState
} from 'react';


function PianoView() {
  const dispatch = useDispatch();
  const scale = useSelector(state => state.scale)
  const refNotes = useSelector(state => state.keyCheck.refNotes)
  const noteStyles = [{ backgroundColor: "#DD403A" }, { backgroundColor: "#AE221E" }, { backgroundColor: "#EE4266" }, { backgroundColor: "#E01541" }, { backgroundColor: "#F77F00" }, { backgroundColor: "#B85F00" }, { backgroundColor: "#05668D" }, { backgroundColor: "#089DD9" }, { backgroundColor: "#B4EDD2" }, { backgroundColor: "#008148" }, { backgroundColor: "#00CC70" }, { backgroundColor: "#5D2A42" }, { backgroundColor: "#8D3F63" }, { backgroundColor: "transparent"}];
  let intervals = [];
  const font = {fontFamily:'open_sans_condensedlight'}
  const [rootNote, setRootNote] = useState("")
  const modeNames = [
    "Ionian I (Major)",
    "Dorian II",
    "Phyrigian III",
    "Lydian IV",
    "Mixolydian V",
    "Aeolian VI (minor)",
    "Locrian VII"
  ]
  const intervalNames = [
    "2,2,1,2,2,2,1",
    "2,1,2,2,2,1,2",
    "1,2,2,2,1,2,2",
    "2,2,2,1,2,2,1",
    "2,2,1,2,2,1,2",
    "2,1,2,2,1,2,2",
    "1,2,2,1,2,2,2"
  ]
  const unchosen = {
    opacity: 0,
  }
  const chosen = {
    opacity: 100,
  }
  const display = [
    {display: "none"},
    {display: "flex"}
  ]

  function pianoReset() {
    intervals = [];
    dispatch(reset())
  }


  function WhiteKey(props) {
    function handleClick() {
      if (scale.length === 7) {
        dispatch(reset())
        intervals = []
      } else if (scale.indexOf(props.position) >= 0) {
        dispatch(remove(props.position))
      } else {
        dispatch(give(props.position))
      }
      dispatch(sort())
    }
    return (
      <button onClick={handleClick} className="whiteKey">
        <div class="spanSpacer"></div>
        <div style={scale.indexOf(props.position) >= 0 ? chosen : unchosen}><div style={noteStyles[refNotes.indexOf(props.inner)]}>{props.inner}</div></div>
      </button>
    )
  }

  function BlackKey(props) {
    function handleClick() {
      if (scale.length === 7) {
        dispatch(reset())
        intervals = []
      } else if (scale.indexOf(props.position) >= 0) {
        dispatch(remove(props.position))
      } else {
        dispatch(give(props.position))
      }
      dispatch(sort())
    }
    return (
      <button  onClick={handleClick} className="blackKey">
        <div class="spanSpacer"></div>
        <div style={scale.indexOf(props.position) >= 0 ? chosen : unchosen}><span style={noteStyles[refNotes.indexOf(props.inner)]}>{props.inner}</span></div>
      </button>
    )
  }

  function KeySpacer() {
    return (
      <div className="keySpacer"></div>
    )
  }
  function findMode() {
    let tempInters = []
    if (scale.length === 7) {
      for (var i = 0; i < scale.length; i++) {
        if (i !== 0) {
          tempInters.push(scale[i] - scale[i - 1])
        }
      }
      tempInters.push((scale[0] + 12) - scale[6])
      intervals = tempInters;
    }
  }

  function ModeRow(props) {
    return(
    <div className="row">
    <div className="cell">
    <span>{props.mode}</span>
    </div>
    <div className="cell">
      <span>{props.intervals}</span>
    </div>
  </div>
    )
  }

  findMode()

  console.log(rootNote)
  console.log(scale)
  return (
    <div id="pianoWrapper">
      <div id="landscapeCheck">
        <div>Turn device to landscape if you need wider keys!</div>
        <div id="rotate"><i class="fas fa-sync-alt"></i></div>
      </div>
      <div id="keyboard">
      <div id="notificationWrapper">
          <div id="rootNotification" style={scale.length > 0 ? display[0] : display[1]}>
            <div>Lowest note is the root!</div>
            </div>
          </div>
        <WhiteKey inner="C" position={0} />
        <WhiteKey inner="D" position={2} />
        <WhiteKey inner="E" position={4} />
        <WhiteKey inner="F" position={5} />
        <WhiteKey inner="G" position={7} />
        <WhiteKey inner="A" position={9} />
        <WhiteKey inner="B" position={11} />
        <WhiteKey inner="C" position={12} />
        <WhiteKey inner="D" position={14} />
        <WhiteKey inner="E" position={16} />
        <WhiteKey inner="F" position={17} />
        <WhiteKey inner="G" position={19} />
        <WhiteKey inner="A" position={21} />
        <WhiteKey inner="B" position={23} />
        <div id="blackKeyWrapper">
          <div className="keyEnd" />
          <BlackKey inner="C#" position={1} />
          <BlackKey inner="D#" position={3} />
          <KeySpacer />
          <BlackKey inner="F#" position={6} />
          <BlackKey inner="G#" position={8} />
          <BlackKey inner="A#" position={10} />
          <KeySpacer />
          <BlackKey inner="C#" position={13} />
          <BlackKey inner="D#" position={15} />
          <KeySpacer />
          <BlackKey inner="F#" position={18} />
          <BlackKey inner="G#" position={20} />
          <BlackKey inner="A#" position={22} />
          <div className="keyEnd" />
        </div>
      </div>
    
      <div id="pianoBottomBar">
        <div id="scaleDiv">
          <div><span className="scaleDivTitle">Root</span>
          <div id="scaleRoot"><span style={scale[0] < 12 ? noteStyles[scale[0]] : scale[0] >= 12 ? noteStyles[(scale[0] - 12)] : noteStyles[13]}>
            {scale[0] < 12 ? refNotes[scale[0]] : scale[0] >= 12 ? refNotes[(scale[0] - 12)] : ""}
            </span>
            </div>
          </div>
          <div><span className="scaleDivTitle">Scale</span>
          <div id="scaleMode">{intervalNames.indexOf(intervals.toString()) > -1 ? modeNames[intervalNames.indexOf(intervals.toString())] : intervals[6] ? "Scale not found!" : ""}</div>
          </div>
        </div>
        <div id="modeTable">
           <ModeRow mode="Ionian I (Major)" intervals="W W H W W W H"/>
           <ModeRow mode="Dorian II" intervals="W W H W W W H"/>
           <ModeRow mode="Phyrigian III" intervals="H W W W H W W"/>
           <ModeRow mode="Lydian IV" intervals="W W W H W W H"/>
           <ModeRow mode="Mixolydian V" intervals="W W H W W H W"/>
           <ModeRow mode="Aeolian VI (minor)" intervals="W H W W H W W"/>
           <ModeRow mode="Locrian VII" intervals="H W W H W W W"/>
          </div>
        <button onClick={pianoReset}>Reset</button>
      </div>
    </div>
  )

}
export default PianoView;