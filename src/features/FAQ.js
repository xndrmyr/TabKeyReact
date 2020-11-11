import '../App.css';
import React, { useState } from 'react';

function FAQ() {
    const [viewCollapse, setViewCollapse] = useState(null)
    const show = {
        display: "block"
    }
    const hide = {
        display: "hidden"
    }
    function clickHandler(props) {
        setViewCollapse(props)
        if (viewCollapse === props) {
            setViewCollapse(null)
        }
    }

    function FeatureList() {
        return (
            <>
            <div>
                TabKey has little more than basic functionality right now, but it's just getting started! There are new things in development and new ideas are on deck. However, potential features may be difficult to implement, and some might be impractical or impossible. In the interest of transparency, here I'll try to maintain a list of features in the works with the following disclaimer: <b>Nothing is set in stone until it's live.</b>
            </div>
            <div id="features">
<ul>
    <li>
        <s>Piano Mode</s>
    </li>
    <li>
        Bass view
    </li>
    <li>
        Chord display
    </li>
    <li>
        More instruments
    </li>
    <li>
        More resources
    </li>
</ul>
            </div>
            </>
        )
    }

    function CollapseButton(props) {
        return (<div className="coll-wrapper">
            <button type="button" className="collapsible" onClick={() => clickHandler(props.value)}>{props.question}<div>{viewCollapse === props.value ? "-" : "+"}</div></button>
            <div className="content" style={props.value === viewCollapse ? show : hide}>
                {props.content}

            </div>
        </div>
        )
    }
    console.log(viewCollapse)
    return (
        <div id="FAQWrapper">
            <CollapseButton question="What is TabKey?" content="TabKey is made to find the major and relative minor key your scale is in." value={0} />
            <CollapseButton question="Is TabKey free?" content="Yes!  100% free!" value={1} />
            <CollapseButton question="I play bass, will TabKey work for me?" content="Sure will! Simply disregard the highest two strings in the tab diagram (B and high e in standard tuning)." value={2} />
            <CollapseButton question="What purpose does TabKey serve?" content="You might be a beginner interested in music theory. Use TabKey to learn and experiment!

Maybe you're a guitarist unfamiliar with sheet music or keys. Knowing what key your song is in can help you write more musical-sounding lead parts, chord progressions, or transitions.
Perhaps you're in the studio. Does your pitch correction plug-in accept keys? TabKey can help! Need the root note for your EQ or subharmonic exciter? Make mixing musical with TabKey. Need control over your synth or arrpegiator? Hello, TabKey!

TabKey can serve many purposes. Let us know what YOU use it for!" value={3} />
            <CollapseButton question="I found a bug or error." content="That's great! Let us know on Facebook or Twitter so we can fix that noise as soon as possible. Thanks in advance!" value={4} />
            <CollapseButton question="I have a suggestion!" content="Wonderful! TabKey currently only has a presence on Facebook and Twitter. If you're interested in communicating through either of those channels, I'd love to hear your idea!" value={5} />
            <CollapseButton question="When will (insert feature here) be added?" content={<FeatureList />} value={6} />

        </div>
    )
}

export default FAQ;