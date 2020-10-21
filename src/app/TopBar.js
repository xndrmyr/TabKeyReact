import '../App.css';
import React, {useState} from 'react';
import { select, isActive } from "../features/keyCheckSlice.js"
import { useDispatch, useSelector } from "react-redux"
import {reset} from "../features/scaleSlice.js"

function TopBar() {
  const dispatch = useDispatch();
  const viewCheck = useSelector(state => state.keyCheck.viewSelect)
  const activeCheck = useSelector(state => state.keyCheck.menuActive)
  const [prevView, setPrevView] = useState(null);
  const unactiveDrawer = {
    transform: "translate3d(0, -100vh, 0)",
    position: "absolute",
    zIndex: "9"
  }
  const activeDrawer = {
    transform: "translate3d(0, 45px, 0)"
  }
  const chosen = {
    color: "#04f06a",
    backgroundColor: "rgba(32, 32, 32, .5)",
    border: "1px solid #015024",
    }

    const unchosen = {
    color: "#fefffe",
    border: "1px solid #202020",
    }
  function guitarView() {
    dispatch(select("guitar"))
    dispatch(isActive(false))
    dispatch(reset())
  }
  function pianoView() {
    dispatch(select("piano"))
    dispatch(isActive(false))
    dispatch(reset())
  }
  function menuClick() {
    if (activeCheck === true){
        if (prevView === "guitar") {
        dispatch(select("guitar"))
      } else if (prevView === "piano") {
        dispatch(select("piano"))
      }
    dispatch(isActive(false))
    } else {
      dispatch(isActive(true))
      setPrevView(viewCheck)
      dispatch(select(""))
    }
  }
  console.log(isActive)
  return (<>
    <div id="topBarWrapper">
      <div id="tabkeyLogo">TabKey</div>
      <div id="topBarSpace"></div>
      <div id="menuButton"><a href="#" class="menu" onClick={menuClick}>&#9776;</a></div>
      <div id="largeNav">
        <nav>
        <ul>
          <div className="largeNavButton" style={viewCheck === "guitar" ? chosen : unchosen} onClick={guitarView}><li>Guitar</li></div>
          <div className="largeNavButton" style={viewCheck === "piano" ? chosen : unchosen} onClick={pianoView}><li>Piano</li></div>
        </ul>
        </nav>
      </div>
    </div>
          <div id="navWrapper" className="drawer" style={activeCheck ? activeDrawer : unactiveDrawer}>
          <nav>
          <ul className="navMenu">
            <div className="navButton" onClick={guitarView} style={prevView === "guitar" ? chosen : unchosen}><li>Guitar</li></div>
            <div className="navButton" onClick={pianoView} style={prevView === "piano" ? chosen : unchosen}><li>Piano</li></div>
            <div className="navButton" style={viewCheck === "howto" ? chosen : unchosen}><li>How-To</li></div>
            <div className="navButton" style={viewCheck === "faq" ? chosen : unchosen}><li>FAQ</li></div>
            <div className="navButton" style={viewCheck === "ipsum" ? chosen : unchosen}><li>Ipsum</li></div>
          </ul>
          </nav>
  

        </div>
        </>
  )
}
export default TopBar;