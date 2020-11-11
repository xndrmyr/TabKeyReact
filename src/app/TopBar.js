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

  function HowTo() {
    dispatch(select("howTo"))
    dispatch(isActive(false))
    dispatch(reset())
  }

  function FAQ() {
    dispatch(select("FAQ"))
    dispatch(isActive(false))
    dispatch(reset())
  }

  function menuClick() {
    if (activeCheck === true){
        if (prevView === "guitar") {
        dispatch(select("guitar"))
      } else if (prevView === "piano") {
        dispatch(select("piano"))
      } else if (prevView === "howTo") {
        dispatch(select("howTo"))
      } else if (prevView === "FAQ") {
        dispatch(select("FAQ"))
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
      <div id="menuButton"><a href="#" className="menu" onClick={menuClick}>&#9776;</a></div>
      <div id="largeNav">
        <nav>
        <ul>
          <a href="#"><div className="largeNavButton" style={viewCheck === "guitar" ? chosen : unchosen} onClick={guitarView}><li>Guitar</li></div></a>
          <a href="#"><div className="largeNavButton" style={viewCheck === "piano" ? chosen : unchosen} onClick={pianoView}><li>Piano</li></div></a>
          <a href="#"><div className="largeNavButton" style={viewCheck === "howTo" ? chosen : unchosen} onClick={HowTo}><li>How-To</li></div></a>
          <a href="#"><div className="largeNavButton" style={viewCheck === "FAQ" ? chosen : unchosen} onClick={FAQ}><li>FAQ</li></div></a>
        </ul>
        </nav>
      </div>
    </div>
          <div id="navWrapper" className="drawer" style={activeCheck ? activeDrawer : unactiveDrawer}>
          <nav>
          <ul className="navMenu">
            <div className="navButton" onClick={guitarView} style={prevView === "guitar" ? chosen : unchosen}><li>Guitar</li></div>
            <div className="navButton" onClick={pianoView} style={prevView === "piano" ? chosen : unchosen}><li>Piano</li></div>
            <div className="navButton" onClick={HowTo} style={prevView === "howTo" ? chosen : unchosen}><li>How-To</li></div>
            <div className="navButton" onClick={FAQ} style={prevView === "FAQ" ? chosen : unchosen}><li>FAQ</li></div>
          </ul>
          </nav>
  

        </div>
        </>
  )
}
export default TopBar;