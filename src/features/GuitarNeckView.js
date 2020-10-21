import '../App.css';
import guitarNeck from "../gneckstatic.png"
import ButtonControl from '../features/ButtonControl'
import { useSelector, useDispatch } from "react-redux"
import React, {
  useState
} from 'react';



function GuitarNeckView() {
  const input = useSelector(state => state.scale)
  const dropped = useSelector(state => state.drop)
  const tuning = useSelector(state => state.tuning)
  const convScale = useSelector(state => state.convScale[0])
  const refNotes = ["C ", "C#", "D ", "D#", "E ", "F ", "F#", "G ", "G#", "A", "A#", "B"];
  const adjust = tuning[0][tuning[0].length - 1];
  const noteStyles = [
    { backgroundColor: "#DD403A" }, 
    { backgroundColor: "#AE221E" }, 
    { backgroundColor: "#EE4266" }, 
    { backgroundColor: "#E01541" }, 
    { backgroundColor: "#F77F00" }, 
    { backgroundColor: "#B85F00" }, 
    { backgroundColor: "#05668D" }, 
    { backgroundColor: "#089DD9" }, 
    { backgroundColor: "#B4EDD2" }, 
    { backgroundColor: "#008148" }, 
    { backgroundColor: "#00CC70" }, 
    { backgroundColor: "#5D2A42" }, 
    { backgroundColor: "#8D3F63" }];
  function ascending(a, b) {
    return a - b;
  }

  function Note(props) {
    let filler = "";
    for (var i = 0; i < input.length; i++) {
      if (props.index === input[i]) {
        if (parseInt(input[i]) + adjust - parseInt(dropped) >= 12) {
          filler = refNotes[(parseInt(input[i]) + adjust - parseInt(dropped)) - 12]
        } else {
          filler = refNotes[parseInt(input[i]) + adjust - parseInt(dropped)]
        }
      }
    }
    return (
      <div className={filler ? "note visible" : "note invisible"} style={Object.assign(props.style, noteStyles[refNotes.indexOf(filler)])}>{filler ? filler : ""}</div>
    )
  }

  function AStringNote(props) {
    let convNotes = [];
    let ref = "";
    let filler = "";
    if (input.length === 7) {
      for (var i = 0; i < 7; i++) {
        if (input[i] < (5 + dropped[0])) {
          convNotes.push(parseInt(input[i]) + 12 - (5 + dropped[0]) + 0)
        } else {
          convNotes.push(parseInt(input[i]) - (5 + dropped[0]) + 0);
        }
      }
      convNotes.sort((a, b) => a - b)
      for (var i = 0; i < convNotes.length; i++) {
        if (props.index === convNotes[i]) {
          ref = convNotes[i] + adjust + 5;
          if (ref > 12) {
            ref -= 12
          }
        }
      }
      filler = refNotes[ref]
    }
    return (
      <div className={filler ? "note visible" : "note invisible"} style={Object.assign(props.style, noteStyles[refNotes.indexOf(filler)])}>{filler ? filler : ""}</div>
    )
  }

  function DStringNote(props) {
    let convNotes = [];
    let ref = "";
    let filler = "";
    if (input.length === 7) {
      for (var i = 0; i < 7; i++) {
        if (input[i] < (10 + dropped[0])) {
          convNotes.push(parseInt(input[i]) + 12 - (10 + dropped[0]) + 0)
        } else {
          convNotes.push(parseInt(input[i]) - (10 + dropped[0]) + 0);
        }
      }
      convNotes.sort((a, b) => a - b)
      for (var i = 0; i < convNotes.length; i++) {
        if (props.index === convNotes[i]) {
          ref = convNotes[i] + adjust + 10;
          if (ref > 12) {
            ref -= 12
          }
        }
      }
      filler = refNotes[ref]
    }

    return (
      <div className={filler ? "note visible" : "note invisible"} style={Object.assign(props.style, noteStyles[refNotes.indexOf(filler)])}>{filler ? filler : ""}</div>
    )
  }

  function GStringNote(props) {
    let convNotes = [];
    let ref = "";
    let filler = "";
    if (input.length === 7) {
      for (var i = 0; i < 7; i++) {
        if (input[i] < (3 + dropped[0])) {
          convNotes.push(parseInt(input[i]) + 12 - (3 + dropped[0]) + 0)
        } else {
          convNotes.push(parseInt(input[i]) - (3 + dropped[0]) + 0);
        }
      }
      convNotes.sort((a, b) => a - b)
      for (var i = 0; i < convNotes.length; i++) {
        if (props.index === convNotes[i]) {
          ref = convNotes[i] + adjust + 3;
          if (ref > 12) {
            ref -= 12
          }
        }
      }
      filler = refNotes[ref]
    }
    return (
      <div className={filler ? "note visible" : "note invisible"} style={Object.assign(props.style, noteStyles[refNotes.indexOf(filler)])}>{filler ? filler : ""}</div>
    )
  }

  function BStringNote(props) {
    let convNotes = [];
    let ref = "";
    let filler = "";
    if (input.length === 7) {
      for (var i = 0; i < 7; i++) {
        if (input[i] < (7 + dropped[0])) {
          convNotes.push(parseInt(input[i]) + 12 - (7 + dropped[0]) + 0)
        } else {
          convNotes.push(parseInt(input[i]) - (7 + dropped[0]) + 0);
        }
      }
      convNotes.sort((a, b) => a - b)
      for (var i = 0; i < convNotes.length; i++) {
        if (props.index === convNotes[i]) {
          ref = convNotes[i] + adjust + 7;
          if (ref > 12) {
            ref -= 12
          }
        }
      }
      filler = refNotes[ref]
    }
    return (
      <div className={filler ? "note visible" : "note invisible"} style={Object.assign(props.style, noteStyles[refNotes.indexOf(filler)])}>{filler ? filler : ""}</div>
    )
  }

  function EStringNote(props) {
    let convNotes = [];
    let ref = "";
    let filler = "";
    if (input.length === 7) {
      for (var i = 0; i < 7; i++) {
        if (input[i] < (0 + dropped[0])) {
          convNotes.push(parseInt(input[i]) + 12 - (0 + dropped[0]) + 0)
        } else {
          convNotes.push(parseInt(input[i]) - (0 + dropped[0]) + 0);
        }
      }
      convNotes.sort((a, b) => a - b)
      for (var i = 0; i < convNotes.length; i++) {
        if (props.index === convNotes[i]) {
          ref = convNotes[i] + adjust + 0;
          if (ref > 12) {
            ref -= 12
          }
        }
      }
      filler = refNotes[ref]
    }

    return (
      <div className={filler ? "note visible" : "note invisible"} style={Object.assign(props.style, noteStyles[refNotes.indexOf(filler)])}>{filler ? filler : ""}</div>
    )
  }



  return (
    <div id="neckWrapper">
      <div id="neckView"><img src={guitarNeck} />
        <div id="strings">
          <div id="highEString">
            <EStringNote index={0} class="note" style={{ marginLeft: "1.6%" }} />
            <EStringNote index={1} style={{ marginLeft: "8%" }} />
            <EStringNote index={2} style={{ marginLeft: "6.8%" }} />
            <EStringNote index={3} style={{ marginLeft: "6.5%" }} />
            <EStringNote index={4} style={{ marginLeft: "6.1%" }} />
            <EStringNote index={5} style={{ marginLeft: "5.6%" }} />
            <EStringNote index={6} style={{ marginLeft: "4.8%" }} />
            <EStringNote index={7} style={{ marginLeft: "4.5%" }} />
            <EStringNote index={8} style={{ marginLeft: "4.2%" }} />
            <EStringNote index={9} style={{ marginLeft: "3.9%" }} />
            <EStringNote index={10} style={{ marginLeft: "3.3%" }} />
            <EStringNote index={11} style={{ marginLeft: "3.2%" }} />
            <EStringNote index={12} style={{ marginLeft: "2.7%", marginRight: "1.7%" }} />
          </div>
          <div id="BString">
            <BStringNote index={0} class="note" style={{ marginLeft: "1.6%" }} />
            <BStringNote index={1} style={{ marginLeft: "8%" }} />
            <BStringNote index={2} style={{ marginLeft: "6.8%" }} />
            <BStringNote index={3} style={{ marginLeft: "6.5%" }} />
            <BStringNote index={4} style={{ marginLeft: "6.1%" }} />
            <BStringNote index={5} style={{ marginLeft: "5.6%" }} />
            <BStringNote index={6} style={{ marginLeft: "4.8%" }} />
            <BStringNote index={7} style={{ marginLeft: "4.5%" }} />
            <BStringNote index={8} style={{ marginLeft: "4.2%" }} />
            <BStringNote index={9} style={{ marginLeft: "3.9%" }} />
            <BStringNote index={10} style={{ marginLeft: "3.3%" }} />
            <BStringNote index={11} style={{ marginLeft: "3.2%" }} />
            <BStringNote index={12} style={{ marginLeft: "2.7%", marginRight: "1.7%" }} />
          </div>
          <div id="GString">
            <GStringNote index={0} class="note" style={{ marginLeft: "1.6%" }} />
            <GStringNote index={1} style={{ marginLeft: "8%" }} />
            <GStringNote index={2} style={{ marginLeft: "6.8%" }} />
            <GStringNote index={3} style={{ marginLeft: "6.5%" }} />
            <GStringNote index={4} style={{ marginLeft: "6.1%" }} />
            <GStringNote index={5} style={{ marginLeft: "5.6%" }} />
            <GStringNote index={6} style={{ marginLeft: "4.8%" }} />
            <GStringNote index={7} style={{ marginLeft: "4.5%" }} />
            <GStringNote index={8} style={{ marginLeft: "4.2%" }} />
            <GStringNote index={9} style={{ marginLeft: "3.9%" }} />
            <GStringNote index={10} style={{ marginLeft: "3.3%" }} />
            <GStringNote index={11} style={{ marginLeft: "3.2%" }} />
            <GStringNote index={12} style={{ marginLeft: "2.7%", marginRight: "1.7%" }} />
          </div>
          <div id="DString">
            <DStringNote index={0} class="note" style={{ marginLeft: "1.6%" }} />
            <DStringNote index={1} style={{ marginLeft: "8%" }} />
            <DStringNote index={2} style={{ marginLeft: "6.8%" }} />
            <DStringNote index={3} style={{ marginLeft: "6.5%" }} />
            <DStringNote index={4} style={{ marginLeft: "6.1%" }} />
            <DStringNote index={5} style={{ marginLeft: "5.6%" }} />
            <DStringNote index={6} style={{ marginLeft: "4.8%" }} />
            <DStringNote index={7} style={{ marginLeft: "4.5%" }} />
            <DStringNote index={8} style={{ marginLeft: "4.2%" }} />
            <DStringNote index={9} style={{ marginLeft: "3.9%" }} />
            <DStringNote index={10} style={{ marginLeft: "3.3%" }} />
            <DStringNote index={11} style={{ marginLeft: "3.2%" }} />
            <DStringNote index={12} style={{ marginLeft: "2.7%", marginRight: "1.7%" }} />
          </div>
          <div id="AString">
            <AStringNote index={0} class="note" style={{ marginLeft: "1.6%" }} />
            <AStringNote index={1} style={{ marginLeft: "8%" }} />
            <AStringNote index={2} style={{ marginLeft: "6.8%" }} />
            <AStringNote index={3} style={{ marginLeft: "6.5%" }} />
            <AStringNote index={4} style={{ marginLeft: "6.1%" }} />
            <AStringNote index={5} style={{ marginLeft: "5.6%" }} />
            <AStringNote index={6} style={{ marginLeft: "4.8%" }} />
            <AStringNote index={7} style={{ marginLeft: "4.5%" }} />
            <AStringNote index={8} style={{ marginLeft: "4.2%" }} />
            <AStringNote index={9} style={{ marginLeft: "3.9%" }} />
            <AStringNote index={10} style={{ marginLeft: "3.3%" }} />
            <AStringNote index={11} style={{ marginLeft: "3.2%" }} />
            <AStringNote index={12} style={{ marginLeft: "2.7%", marginRight: "1.7%" }} />
          </div>
          <div id="LowEString">
            <Note index="0" style={{ marginLeft: "1.6%" }} />
            <Note index="1" style={{ marginLeft: "8%" }} />
            <Note index="2" style={{ marginLeft: "6.8%" }} />
            <Note index="3" style={{ marginLeft: "6.5%" }} />
            <Note index="4" style={{ marginLeft: "6.1%" }} />
            <Note index="5" style={{ marginLeft: "5.6%" }} />
            <Note index="6" style={{ marginLeft: "4.8%" }} />
            <Note index="7" style={{ marginLeft: "4.5%" }} />
            <Note index="8" style={{ marginLeft: "4.2%" }} />
            <Note index="9" style={{ marginLeft: "3.9%" }} />
            <Note index="10" style={{ marginLeft: "3.3%" }} />
            <Note index="11" style={{ marginLeft: "3.2%" }} />
            <Note index="12" style={{ marginLeft: "2.7%", marginRight: "1.7%" }} />
          </div>
        </div>
      </div>
      <ButtonControl />
    </div>
  )

}
export default GuitarNeckView;

