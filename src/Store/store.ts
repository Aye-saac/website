import thunk from "redux-thunk"
import { configureStore } from "@reduxjs/toolkit"

import { dialogue, live, navigation, permission } from "Features"

export const store = configureStore({
  reducer: {
    permission: permission.permissionReducer,
    dialogue: dialogue.dialogueReducer,
    navigation: navigation.navigationReducer,
    live: live.liveReducer,
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>

export default store
