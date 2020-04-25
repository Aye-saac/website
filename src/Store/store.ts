import { configureStore } from "@reduxjs/toolkit"

import { dialogue, navigation, permission } from "Features"

export const store = configureStore({
  reducer: {
    permission: permission.permissionReducer,
    dialogue: dialogue.dialogueReducer,
    navigation: navigation.navigationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
