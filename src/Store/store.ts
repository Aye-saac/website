import { configureStore } from "@reduxjs/toolkit"

import { dialogue, permission } from "Features"

export const store = configureStore({
  reducer: {
    permission: permission.permissionReducer,
    dialogue: dialogue.dialogueReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
