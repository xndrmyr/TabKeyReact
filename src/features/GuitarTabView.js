import '../App.css';

import { useSelector } from "react-redux"
import React, {
  useState
} from 'react';

function GuitarTabView() {
  const tuning = useSelector(state => state.tuning);
  const inputNotes = useSelector(state => state.scale);
  const dropped = useSelector(state => state.drop);
  const keyCheck = useSelector(state => state);

    function fillContent(index) {
      return ((inputNotes[index] > 9) ? inputNotes[index] : (inputNotes[index] <= 9) ? inputNotes[index] + "-" : "--")
    }   
    
    function InputNotes(props) {
      return (<div id={props.class + props.index}>{fillContent(props.index)}-</div>)
    }

    function AString(props) {
      let convNotes = [];

    if (inputNotes.length === 7 && keyCheck) {
      for (var i = 0; i < 7; i++) {
        if (inputNotes[i] < (5 + dropped[0])) {
          convNotes.push(parseInt(inputNotes[i]) + 12 - (5+dropped[0]) + props.space)
        } else {
        convNotes.push(parseInt(inputNotes[i])-(5+dropped[0]) + props.space);
        }
      }
      convNotes.sort((a, b) => a-b)
    }

    return (<div>{(convNotes[props.index] > 9) ? convNotes[props.index] : (convNotes[props.index] <= 9) ? convNotes[props.index] + "-" : "--"}-</div>)
    }

    function DString(props) {
      let convNotes = [];

    if (inputNotes.length === 7 && keyCheck) {
      for (var i = 0; i < 7; i++) {
        if (inputNotes[i] < (5 + dropped[0]) + props.space) {
          convNotes.push(parseInt(inputNotes[i]) + 12 - (5+dropped[0]) - props.space)
        } else {
        convNotes.push(parseInt(inputNotes[i])-(5+dropped[0]) - props.space);
        }
      }
      convNotes.sort((a, b) => a-b)
    }
    return (<div>{(convNotes[props.index] > 9) ? convNotes[props.index] : (convNotes[props.index] <= 9) ? convNotes[props.index] + "-" : "--"}-</div>)
    }

    function GString(props) {
      let convNotes = [];

    if (inputNotes.length === 7 && keyCheck) {
      for (var i = 0; i < 7; i++) {
        if (inputNotes[i] < (3 + dropped[0]) + props.space) {
          convNotes.push(parseInt(inputNotes[i]) + 12 - (3+dropped[0]) - props.space)
        } else {
        convNotes.push(parseInt(inputNotes[i])-(3+dropped[0]) - props.space);
        }
      }
      convNotes.sort((a, b) => a-b)
    }
   
    return (<div>{(convNotes[props.index] > 9) ? convNotes[props.index] : (convNotes[props.index] <= 9) ? convNotes[props.index] + "-" : "--"}-</div>)
    }

    function BString(props) {
      let convNotes = [];

    if (inputNotes.length === 7 && keyCheck) {
      for (var i = 0; i < 7; i++) {
        if (inputNotes[i] < (7 + dropped[0]) + props.space) {
          convNotes.push(parseInt(inputNotes[i]) + 12 - (7+dropped[0]) - props.space)
        } else {
        convNotes.push(parseInt(inputNotes[i])-(7+dropped[0]) - props.space);
        }
      }
      convNotes.sort((a, b) => a-b)
    }
  
    return (<div>{(convNotes[props.index] > 9) ? convNotes[props.index] : (convNotes[props.index] <= 9) ? convNotes[props.index] + "-" : "--"}-</div>)
    }

    function HighEString(props) {
      let convNotes = [];

    if (inputNotes.length === 7 && keyCheck) {
      for (var i = 0; i < 7; i++) {
        if (inputNotes[i] < (0 + dropped[0]) + props.space) {
          convNotes.push(parseInt(inputNotes[i]) + 12 - (0+dropped[0]) - props.space)
        } else {
        convNotes.push(parseInt(inputNotes[i])-(0+dropped[0]) - props.space);
        }
      }
      convNotes.sort((a, b) => a-b)
    }
   
    return (<div>{(convNotes[props.index] > 9) ? convNotes[props.index] : (convNotes[props.index] <= 9) ? convNotes[props.index] + "-" : "--"}-</div>)
    }

    
    return (<>
      <div id="guitarAnchor"></div>
    <div id="GuitarTabView">
        <div id="sixthString" className="string">
        <div>{tuning[0][0].length > 1 ? tuning[0][5] : "-" + tuning[0][5]}</div>|-
        <HighEString index="0" space={0} />
        <HighEString index="1" space={0} />
        <HighEString index="2" space={0} />
        <HighEString index="3" space={0} />
        <HighEString index="4" space={0} />
        <HighEString index="5" space={0} />
        <HighEString index="6" space={0} />
        </div>
        <div id="fifthString" className="string">
        <div>{tuning[0][0].length > 1 ? tuning[0][4] : "-" + tuning[0][4]}</div>|-
        <BString index="0" space={0} />
        <BString index="1" space={0} />
        <BString index="2" space={0} />
        <BString index="3" space={0} />
        <BString index="4" space={0} />
        <BString index="5" space={0} />
        <BString index="6" space={0} />
        </div>
        <div  id="fourthString" className="string">
        <div>{tuning[0][0].length > 1 ? tuning[0][3] : "-" + tuning[0][3]}</div>|-
        <GString index="0" space={0} />
        <GString index="1" space={0} />
        <GString index="2" space={0} />
        <GString index="3" space={0} />
        <GString index="4" space={0} />
        <GString index="5" space={0} />
        <GString index="6" space={0} />
        </div>
        <div  id="thirdString" className="string">
        <div>{tuning[0][0].length > 1 ? tuning[0][2] : "-" + tuning[0][2]}</div>|-
        <DString index="0" space={5}/>
        <DString index="1" space={5}/>
        <DString index="2" space={5}/>
        <DString index="3" space={5}/>
        <DString index="4" space={5}/>
        <DString index="5" space={5}/>
        <DString index="6" space={5}/>
        </div>
        <div  id="secondString" className="string">
        <div>{tuning[0][0].length > 1 ? tuning[0][1] : "-" + tuning[0][1]}</div>|-
        <AString index="0" space={0}/>
        <AString index="1" space={0}/>
        <AString index="2" space={0}/>
        <AString index="3" space={0}/>
        <AString index="4" space={0}/>
        <AString index="5" space={0}/>
        <AString index="6" space={0}/>
        </div>
        <div id="bottomString" className="string">
        <div>{tuning[0][0].length > 1 ? tuning[0][0] : "-" + tuning[0][0]}</div>|-
        <InputNotes class="lowest" index="0"/>
        <InputNotes class="lowest" index="1"/>
        <InputNotes class="lowest" index="2"/>
        <InputNotes class="lowest" index="3"/>
        <InputNotes class="lowest" index="4"/>
        <InputNotes class="lowest" index="5"/>
        <InputNotes class="lowest" index="6"/>
        </div>
        </div>
        </>
    )
}

export default GuitarTabView;