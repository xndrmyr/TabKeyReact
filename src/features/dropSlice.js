import { createSlice } from '@reduxjs/toolkit'

export const dropSlice = createSlice({
    name: "drop",
    initialState: [0],
    reducers: {
        dropped: (state, action) => {state[0] = action.payload},
}
})

export default dropSlice.reducer
export const {dropped, reinit} = dropSlice.actions
export const selectDrop = state => state.drop.value