import { configureStore } from "@reduxjs/toolkit"

import { permission } from "Features"

export const store = configureStore({
  reducer: {
    permission: permission.permissionReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
