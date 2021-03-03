import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { LiveState } from "Typings"

const initialState: LiveState = {
  recording: false,
  speechDetection: "",
  questionRead: false,
  questionSent: false,
}

export const slice = createSlice({
  name: "live",
  initialState,
  reducers: {
    setRecording(state, action: PayloadAction<boolean>) {
      state.recording = action.payload
      if (state.recording) {
        state.questionSent = false
        state.questionRead = false
      }
    },
    setSpeechDetection(state, action: PayloadAction<string>) {
      state.speechDetection = action.payload
    },
    clear(state) {
      state.speechDetection = ""
      state.questionRead = false
      state.questionSent = false
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload
    },
    setQuestionSend(state, action: PayloadAction<boolean>) {
      state.questionSent = action.payload
    },
    setQuestionRead(state, action: PayloadAction<boolean>) {
      state.questionRead = action.payload
    },
  },
})

export const {
  clear,
  setRecording,
  setSpeechDetection,
  setError,
  setQuestionSend,
  setQuestionRead,
} = slice.actions

export const liveReducer = slice.reducer
