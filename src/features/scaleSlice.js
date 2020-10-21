import { createSlice } from '@reduxjs/toolkit'

export const scaleSlice = createSlice({
    name: "scale",
    initialState: [],
    reducers: {
        give: (state, action) => { state.push(action.payload) },
        back: (state) => { state.pop() },
        reset: (state) => { state.length = 0 },
        remove: (state, action) => { state.splice(state.indexOf(action.payload), 1)}, 
        sort: (state) => {state = state.sort((a,b)=>a-b)},
        
    }
},

)

export default scaleSlice.reducer
export const {give, back, reset, remove, sort} = scaleSlice.actions
export const selectScale = state => state.scale.value