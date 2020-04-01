import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "Store"

export interface PermissionReducerState {
  camera: PermissionState
  microphone: PermissionState
  privacy: PermissionState
}

const initialState: PermissionReducerState = {
  camera: "prompt",
  microphone: "prompt",
  privacy: "prompt",
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

    updatePrivacy: (state, action: PayloadAction<PermissionState>) => {
      state.privacy = action.payload
    },
  },
})

export const { updateCamera, updateMicrophone, updatePrivacy } = slice.actions

export const selectPermission = (state: RootState) => state.permission

export const permissionReducer = slice.reducer

export default permissionReducer
