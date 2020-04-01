import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "Store"

export interface PermissionReducerState {
  camera: PermissionState
  microphone: PermissionState
  speaker: PermissionState
  privacy: PermissionState
}

const initialState: PermissionReducerState = {
  camera: "prompt",
  microphone: "prompt",
  privacy: "prompt",
  // Speaker is granted by default
  speaker: "granted",
}

export const slice = createSlice({
  name: "permission",
  initialState,
  reducers: {
    updateCamera: (state, action: PayloadAction<PermissionState>) => {
      state.camera = action.payload
    },
    updateMicrophone: (state, action: PayloadAction<PermissionState>) => {
      state.microphone = action.payload
    },
    updateSpeaker: (state, action: PayloadAction<PermissionState>) => {
      state.speaker = action.payload
    },
    updatePrivacy: (state, action: PayloadAction<PermissionState>) => {
      state.privacy = action.payload
    },
  },
})

export const {
  updateCamera,
  updateMicrophone,
  updatePrivacy,
  updateSpeaker,
} = slice.actions

export const selectPermission = (state: RootState) => state.permission

export const permissionReducer = slice.reducer

export default permissionReducer
