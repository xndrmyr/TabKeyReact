import './App.css';
import TopBar from './app/TopBar'
import Sidebar from './app/Sidebar'
import GuitarTabView from './features/GuitarTabView'
import GuitarNeckView from './features/GuitarNeckView'
import MusicKeyView from './features/musicKeyView'
import PianoView from './features/PianoView'
import RightBar from './app/RightBar'
import React, {
  useState
} from 'react';
import {useSelector} from "react-redux"

const App = () => {
  const viewSelect = useSelector(state => state.keyCheck.viewSelect);
  const activeCheck = useSelector(state => state.keyCheck.menuActive)
  const visible = {
    display: "flex",
    flexFlow: "column"
  }
  const invisible = {
    display: "none"
  }
  const mainAdjust = [{
    Height: "90vh"},{
    flexGrow: "1"
  }]
  return (
    <div className="App" id="top">
      <TopBar />
      <div id="mainView" style={viewSelect !== "" ? mainAdjust[1] : mainAdjust[0]}>
        <div style={viewSelect !== "guitar" || activeCheck ? invisible : visible}>
          <div className="cell"></div>
          <Sidebar />
          <GuitarTabView/>
          <GuitarNeckView />
          <MusicKeyView />
          <RightBar />
        </div>
        <div id="pianoView" style={viewSelect !== "piano" || activeCheck ? invisible : visible}>
          <PianoView />
        </div>
      </div>
      <div id="footer">
          <div id="socials">
            <i className="fab fa-facebook"></i><i className="fab fa-twitter"></i><i className="fab fa-instagram"></i><i className="fab fa-linkedin-in"></i><i className="fab fa-github"></i><i className="fab fa-reddit"></i>
          </div>
          <div id="C">Copyright TabKey 2020</div>
        </div>
    </div>
  )
}


export default App;