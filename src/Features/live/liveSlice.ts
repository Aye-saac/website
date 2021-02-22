import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { LiveState } from "Typings"

const initialState: LiveState = {
  recording: false,
  speechDetection: "",
}

export const slice = createSlice({
  name: "live",
  initialState,
  reducers: {
    setRecording(state, action: PayloadAction<boolean>) {
      state.recording = action.payload
    },
    setSpeechDetection(state, action: PayloadAction<string>) {
      state.speechDetection = action.payload
    },
    clear(state) {
      state.speechDetection = ""
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload
    },
  },
})

export const {
  clear,
  setRecording,
  setSpeechDetection,
  setError,
} = slice.actions

export const liveReducer = slice.reducer
