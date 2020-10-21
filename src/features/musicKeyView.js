import '../App.css';

import { useSelector, useDispatch } from "react-redux"
import React, {
  useState
} from 'react';

import {
    set,
    setKey,
    setIndex
  } from "./keyCheckSlice";

  import {
      converted,
    resetConv,
    popConv
  } from "./convScaleSlice";

function MusicKeyView() {

    const refNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const scale = useSelector(state => state.scale);
    const dropped = useSelector(state => state.drop);
    const tuning = useSelector(state => state.tuning);
    const keyCheck = useSelector(state => state.keyCheck);
    const convScale = useSelector(state => state.convScale);
    const convertedScale = [];
    const sortedScale = [];
    const conv = convertedScale.sort(ascending);
    const dispatch = useDispatch();
    function ascending(a, b) {
        return a-b;
    }
    for (var i = 0; scale.length > i; i++) {
        let noteConverter = parseInt(scale[i], 10) + tuning[0][tuning[0].length-1] - dropped;
        if (noteConverter >= 12) {
            convertedScale.push(noteConverter - 12)   
            sortedScale.push(noteConverter - 12)
        } else {
            convertedScale.push(noteConverter)
            sortedScale.push(noteConverter)
        }
      }

      if (keyCheck.musicKeys.indexOf(sortedScale.sort(ascending).toString()) >= 0){
        dispatch(set(true))
        dispatch(setKey(refNotes[keyCheck.musicKeys.indexOf(sortedScale.sort(ascending).toString())]))
        dispatch(setIndex(keyCheck.musicKeys.indexOf(sortedScale.sort(ascending).toString())))
        if (conv.length === 7 && convScale.length === 0) {
            dispatch(converted(conv.sort(ascending)))
        }
      } else {
        dispatch(resetConv([]))
        dispatch(set(false))
        dispatch(setKey(""))
        dispatch(setIndex(null))
      }
    /* 
    
           for (var i = 0; i < keyCheck.musicKeys.length; i++) {
            if (musicKeys[i].toString() === sortedScale.sort(ascending).toString()) {
               setTheMajor(keyCheck.musicKeyNames[i][0])
               setTheMinor(keyCheck.musicKeyNames[i][1])
            }
           }
       
 <div id="fullScale">
    <ConvNote index="0" />
    <ConvNote index="1" />
    <ConvNote index="2" />
    <ConvNote index="3" />
    <ConvNote index="4" />
    <ConvNote index="5" />
    <ConvNote index="6" />
        </div>

    function ConvNote(props) {
        return(
        <div>{convertedScale[props.index] === 0 || convertedScale[props.index] ? refNotes[convertedScale[props.index]] : ""}</div>
        )
    }      

    */

return (
    <div id="keyViewWrapper">
   
    <div id="keysWrapper">
        <div id="majorKey">
            <span>Major</span>
            <div>{keyCheck.musicKeys.indexOf(sortedScale.sort(ascending).toString()) >= 0 ? keyCheck.musicKeyNames[keyCheck.musicKeys.indexOf(sortedScale.sort(ascending).toString())][0] : sortedScale.length === 7 ? "Scale not found!" : ""}</div>
            </div>
        <div id="minorKey">
            <span>Minor</span>
            <div>{keyCheck.musicKeys.indexOf(sortedScale.sort(ascending).toString()) >= 0 ? keyCheck.musicKeyNames[keyCheck.musicKeys.indexOf(sortedScale.sort(ascending).toString())][1] : sortedScale.length === 7 ? "" : ""}</div>
            </div>
    </div>
    <div id="additionalInfoWrapper">

    </div>
    </div>
)
     }

export default MusicKeyView;