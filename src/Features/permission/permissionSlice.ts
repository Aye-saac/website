import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "Store"
import { PermissionReducerState } from "Typings"

const initialState: PermissionReducerState = {
  camera: {
    status: "prompt",
    mobileOnly: true,
  },
  microphone: {
    status: "prompt",
    mobileOnly: false,
  },
}

export const slice = createSlice({
  name: "permission",
  initialState,
  reducers: {
    updateCameraStatus: (state, action: PayloadAction<PermissionState>) => {
      state.camera.status = action.payload
    },

    updateMicrophoneStatus: (state, action: PayloadAction<PermissionState>) => {
      state.microphone.status = action.payload
    },
  },
})

export const { updateCameraStatus, updateMicrophoneStatus } = slice.actions

export const selectPermission = (state: RootState) => state.permission
export const selectMicrophone = (state: RootState) =>
  state.permission.microphone
export const selectCamera = (state: RootState) => state.permission.camera

export const selectAllPermissionsDecided = (state: RootState) => {
  return (
    Object.values(state.permission).filter(
      (permission) => permission.status === "prompt",
    ).length === 0
  )
}

export const permissionReducer = slice.reducer

export default permissionReducer
