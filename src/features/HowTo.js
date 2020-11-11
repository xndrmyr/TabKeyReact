import '../App.css';
import guitarNeckHowTo from "../guitarneckhowto.png"
import pianoHowTo1 from "../pianohowto1.png"
import pianoHowTo2 from "../pianohowto2.png"
import React from 'react';

function HowTo() {
    return (
        <div id="HowTo">
            <div id="howToWrapper">

                <span>TabKey is made to find the major and
                relative minor your scale is in.</span>

                <p>Enter your notes as they would appear on your lowest string (deepest pitch and thickest gauge) starting with the lowest note possible. "0" is open, "1" is the first fret, and so on!</p>
                <div id="gneckhow"><img src={guitarNeckHowTo}></img></div>
                <p>Once TabKey receives enough notes, it will show you the major and relative minor key that your notes are in. To try another scale or tuning, just enter in more numbers or change your tuning, and the program starts over!</p>
                <span>TabKey Piano now finds scales based on your root note.</span>
                <p>TabKey Piano looks at your lowest note to find the root of your scale.</p>
                <div id="gneckhow"><img src={pianoHowTo1}></img></div>
                <p>It then counts the spaces (intervals) between each note.  Your root is the lowest note when your scale is finished, not the first note you enter.</p>
                <div id="gneckhow"><img src={pianoHowTo2}></img></div>
                <p>If you select a note by mistake, just tap or click it again to remove it!</p>
            </div>
        </div>
    )
}

export default HowTo