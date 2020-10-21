import { configureStore } from '@reduxjs/toolkit';

import scaleReducer from "../features/scaleSlice"
import tuningReducer from "../features/tuningSlice"
import dropReducer from "../features/dropSlice"
import keyCheckReducer from "../features/keyCheckSlice"
import convScaleReducer from "../features/convScaleSlice"

export default configureStore({
  reducer: {
    scale: scaleReducer,
    tuning: tuningReducer,
    drop: dropReducer,
    keyCheck: keyCheckReducer,
    convScale: convScaleReducer,
  },
});
