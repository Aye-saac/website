import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "Store"
import { PermissionReducerState } from "Typings"

const PREMISSION_CAMERA_KEY = "permission:camera"
const PERMISSION_MICRO_KEY = "permission:micro"

const getInitialPermission = (key: string): PermissionState => {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key) as PermissionState
  }
  return "prompt"
}

const initialState: PermissionReducerState = {
  camera: {
    status: getInitialPermission(PREMISSION_CAMERA_KEY),
    mobileOnly: true,
  },
  microphone: {
    status: getInitialPermission(PERMISSION_MICRO_KEY),
    mobileOnly: false,
  },
}

export const slice = createSlice({
  name: "permission",
  initialState,
  reducers: {
    updateCameraStatus: (state, action: PayloadAction<PermissionState>) => {
      state.camera.status = action.payload
      localStorage.setItem(PREMISSION_CAMERA_KEY, action.payload)
    },

    updateMicrophoneStatus: (state, action: PayloadAction<PermissionState>) => {
      state.microphone.status = action.payload
      localStorage.setItem(PERMISSION_MICRO_KEY, action.payload)
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
