/* eslint-disable import/no-cycle */
import { configureStore } from "@reduxjs/toolkit"

import { counterReducer } from "Features/counter"
import { permissionReducer } from "Features/permission"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    permission: permissionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
