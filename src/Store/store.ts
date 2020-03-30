/* eslint-disable import/no-cycle */
import { configureStore } from "@reduxjs/toolkit"

import { counterReducer } from "Features/counter"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
