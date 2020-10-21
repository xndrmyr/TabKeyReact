import '../App.css';
import ViewToggle from '../features/ViewToggle'
import TuningSelect from '../features/TuningSelect'
import React, {
  useState
} from 'react';



const Sidebar = () => {
  return (
  <div className="Sidebar">
    <TuningSelect />
  </div>
  )
}


export default Sidebar;