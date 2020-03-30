import { configureStore } from "@reduxjs/toolkit"

import { counter, permission } from "Features"

export const store = configureStore({
  reducer: {
    counter: counter.counterReducer,
    permission: permission.permissionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
