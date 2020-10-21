import { createSlice } from '@reduxjs/toolkit'

export const keyCheckSlice = createSlice({
    name: "keyCheck",
    initialState: {
        value: false,
        musicKey: "",
        musicKeyIndex: null,
        musicKeys : [
        "0,2,4,5,7,9,11",
        "0,1,3,5,6,8,10",
        "1,2,4,6,7,9,11",
        "0,2,3,5,7,8,10",
        "1,3,4,6,8,9,11",
        "0,2,4,5,7,9,10",
        "1,3,5,6,8,10,11",
        "0,2,4,6,7,9,11",
        "0,1,3,5,7,8,10",
        "1,2,4,6,8,9,11",
        "0,2,3,5,7,9,10",
        "1,3,4,6,8,10,11"
        ],
        musicKeyNames : [
        ["C Major", "A minor"],
        ["Db Major","Bb minor"],
        ["D Major", "B minor"],
        ["Eb Major","C minor"],
        ["E Major","C# minor"],
        ["F Major","D minor"],
        ["Gb Major","Eb minor"],
        ["G Major", "E minor"],
        ["Ab Major","F minor"],
        ["A Major","F# minor"],
        ["Bb Major","G minor"],
        ["B Major","G# minor"]
        ],
        refNotes: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
        viewSelect: "guitar",
        menuActive: false
    },
    reducers: {
        set: (state, action) => {state.value = action.payload},
        setKey: (state, action) => {state.musicKey = action.payload},
        setIndex: (state, action) => {state.musicKeyIndex = action.payload},
        resetKeyCheck: (state) => {state.value = false},
        select: (state, action) => {state.viewSelect = action.payload},
        isActive: (state, action) => {state.menuActive = action.payload}
    }
},

)

export default keyCheckSlice.reducer
export const {set, setKey, setIndex, resetKeyCheck, viewSelect, select, isActive} = keyCheckSlice.actions
export const selectKeyCheck = state => state