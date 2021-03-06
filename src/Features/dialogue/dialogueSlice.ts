import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { objectWithoutKey } from "Helpers/objectWithoutKey"
import { RootState } from "Store"
import { DialogueFile, DialogueMessage, DialogueState } from "Typings"

import { sendQuestion } from "./dialogueThunk"

const initialState: DialogueState = {
  image: null,
  message: null,
  responses: [],
  showResponse: false,
  loading: false,
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
  extraReducers: (builder) => {
    builder.addCase(sendQuestion.pending, (state) => {
      state.loading = true
      state.error = undefined
      state.showResponse = false
    })
    builder.addCase(sendQuestion.rejected, (state, action) => {
      state.loading = false
      console.error(action.error)
      state.error = action.error.message || "An error occured"
      state.showResponse = false
    })
    builder.addCase(sendQuestion.fulfilled, (state, action) => {
      state.loading = false
      console.log(action.payload.body.data)
      if (!action.payload.body.data) return
      state.showResponse = true
      const newResponses = objectWithoutKey(
        action.payload.body.data,
        "responses",
      )
      state.responses = [...state.responses, newResponses]
    })
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
export const selectDialogueError = (state: RootState) => state.dialogue.error
export const selectLoading = (state: RootState) => state.dialogue.loading

export const dialogueReducer = slice.reducer

export default dialogueReducer
