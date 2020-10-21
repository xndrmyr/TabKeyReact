import { createSlice } from '@reduxjs/toolkit'

export const convScaleSlice = createSlice({
    name: "convScale",
    initialState: [],
    reducers: {
        converted: (state, action) => {state.push(action.payload)},
        resetConv: (state) => {state.length = 0},
        popConv: (state, action) => {state = action.payload}
    }
},

)

export default convScaleSlice.reducer
export const {converted, resetConv, popConv} = convScaleSlice.actions
export const selectConvScale = state => state.convScale.value