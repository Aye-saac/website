import { createSlice } from "@reduxjs/toolkit"

import { RootState } from "Store"

interface PermissionState {
  camera: boolean
  microphone: boolean
  privacy: boolean
}

const initialState: PermissionState = {
  camera: false,
  microphone: false,
  privacy: false,
}

export const slice = createSlice({
  name: "permission",
  initialState,
  reducers: {
    enableCamera: (state) => {
      state.camera = true
    },
    disableCamera: (state) => {
      state.camera = false
    },
    enableMicrophone: (state) => {
      state.microphone = true
    },
    disableMicrophone: (state) => {
      state.microphone = false
    },
    enablePrivacy: (state) => {
      state.privacy = true
    },
    disablePrivacy: (state) => {
      state.privacy = false
    },
  },
})

export const {
  enableCamera,
  enableMicrophone,
  enablePrivacy,
  disableCamera,
  disableMicrophone,
  disablePrivacy,
} = slice.actions

export const selectPermission = (state: RootState) => state.permission

export const permissionReducer = slice.reducer

export default permissionReducer
