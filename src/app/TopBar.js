import '../App.css';
import React, {useState} from 'react';
import { select } from "../features/keyCheckSlice.js"
import { useDispatch, useSelector } from "react-redux"
import {reset} from "../features/scaleSlice.js"

function TopBar() {
  const dispatch = useDispatch();
  const viewCheck = useSelector(state => state.keyCheck.viewSelect)
  const [menuActive, setMenuActive] = useState(false)
  const unactiveDrawer = {
    transform: "translate3d(0, -100vh, 0)",
    position: "absolute"
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
    setMenuActive(false)
    dispatch(reset())
  }
  function pianoView() {
    dispatch(select("piano"))
    setMenuActive(false)
    dispatch(reset())
  }
  function menuClick() {
    if (menuActive === true){
    setMenuActive(false)
    dispatch(select("guitar"))
    dispatch(reset())
    } else {
      setMenuActive(true)
    }
  }
  console.log(menuActive)
  return (<>
    <div id="topBarWrapper">
      <div id="tabkeyLogo">TabKey</div><div id="topBarSpace"></div>
      <div id="menuButton"><a href="#" class="menu" onClick={menuClick}>&#9776;</a></div>
    </div>
          <div id="navWrapper" className="drawer" style={menuActive ? activeDrawer : unactiveDrawer}>
          <nav>
          <ul className="navMenu">
            <div className="navButton" onClick={guitarView} style={viewCheck === "guitar" ? chosen : unchosen}><li>Guitar</li></div>
            <div className="navButton" onClick={pianoView} style={viewCheck === "piano" ? chosen : unchosen}><li>Piano</li></div>
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