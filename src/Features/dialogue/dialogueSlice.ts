import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "Store"
import { DialogueFile, DialogueMessage, DialogueState } from "Typings"

const initialState: DialogueState = {
  image: null,
  message: null,
  responses: [],
  showResponse: false,
}

export const slice = createSlice({
  name: "dialogue",
  initialState,
  reducers: {
    replaceImage: (state, action: PayloadAction<DialogueFile>) => {
      state.image = action.payload
      state.responses = initialState.responses
      state.showResponse = initialState.showResponse
    },
    replaceMessage: (state, action: PayloadAction<DialogueMessage>) => {
      state.message = action.payload
    },
    addResponse: (state, action: PayloadAction<any>) => {
      state.responses = [...state.responses, action.payload]
    },
    hideResponse: (state) => {
      state.showResponse = false
    },
    showResponse: (state) => {
      state.showResponse = true
    },
    resetDialogue: (state) => {
      state.image = initialState.image
      state.message = initialState.message
      state.responses = initialState.responses
      state.showResponse = initialState.showResponse
    },
    resetMessage: (state) => {
      state.message = initialState.message
      state.showResponse = initialState.showResponse
    },
  },
})

export const {
  replaceImage,
  replaceMessage,
  addResponse,
  hideResponse,
  showResponse,
  resetDialogue,
  resetMessage,
} = slice.actions

export const selectDialogue = (state: RootState) => state.dialogue
export const selectImage = (state: RootState) => state.dialogue.image
export const selectMessage = (state: RootState) => state.dialogue.message
export const selectResponses = (state: RootState) => state.dialogue.responses
export const selectShowResponse = (state: RootState) =>
  state.dialogue.showResponse

export const dialogueReducer = slice.reducer

export default dialogueReducer
