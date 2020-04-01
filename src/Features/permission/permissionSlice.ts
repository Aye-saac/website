import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "Store"

type DevicePermission = {
  isAvailable: boolean
  status: PermissionState
}

export interface PermissionReducerState {
  camera: DevicePermission
  microphone: DevicePermission
  privacy: DevicePermission
}

const initialState: PermissionReducerState = {
  camera: {
    isAvailable: true,
    status: "prompt",
  },
  microphone: {
    isAvailable: true,
    status: "prompt",
  },
  privacy: {
    isAvailable: true,
    status: "prompt",
  },
}

export const slice = createSlice({
  name: "permission",
  initialState,
  reducers: {
    updateCameraAvailability: (state, action: PayloadAction<boolean>) => {
      state.camera.isAvailable = action.payload
    },
    updateCameraStatus: (state, action: PayloadAction<PermissionState>) => {
      if (state.camera.isAvailable) {
        state.camera.status = action.payload
      } else {
        state.camera.status = "denied"
      }
    },
    updateMicrophoneAvailability: (state, action: PayloadAction<boolean>) => {
      state.microphone.isAvailable = action.payload
    },
    updateMicrophoneStatus: (state, action: PayloadAction<PermissionState>) => {
      if (state.microphone.isAvailable) {
        state.microphone.status = action.payload
      } else {
        state.microphone.status = "denied"
      }
    },
    updatePrivacyStatus: (state, action: PayloadAction<PermissionState>) => {
      if (state.privacy.isAvailable) {
        state.privacy.status = action.payload
      } else {
        state.privacy.status = "denied"
      }
    },
  },
})

export const {
  updateCameraAvailability,
  updateMicrophoneAvailability,
  updateCameraStatus,
  updateMicrophoneStatus,
  updatePrivacyStatus,
} = slice.actions

export const selectPermission = (state: RootState) => state.permission
export const selectMicrophone = (state: RootState) =>
  state.permission.microphone
export const selectCamera = (state: RootState) => state.permission.camera
export const selectPrivacy = (state: RootState) => state.permission.privacy

export const permissionReducer = slice.reducer

export default permissionReducer
