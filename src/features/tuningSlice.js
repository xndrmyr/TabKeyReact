import { createSlice } from '@reduxjs/toolkit'

export const tuningSlice = createSlice({
    name: "tuning",
    initialState: [["E", "A", "D", "G", "B", "e", 4]],
    reducers: {
        tuneTo: (state, action) => {state.push(action.payload)},
        clear: (state) => {state.length = 0},
}
})

export default tuningSlice.reducer
export const {clear, tuneTo} = tuningSlice.actions
export const selectTuning = state => state.tuning.value