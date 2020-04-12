import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from "Store"

interface DialogueFile {
  url: string
}

interface DialogueMessageText {
  type: "text"
  data: string
}

interface DialogueMessageAudio {
  type: "audio"
  url: string
  data: FileReader["result"]
}

type DialogueMessage = DialogueMessageText | DialogueMessageAudio

export interface DialogueState {
  image: DialogueFile | null
  message: DialogueMessage | null
  responses: any[]
}

const initialState: DialogueState = {
  image: null,
  message: null,
  responses: [],
}

export const slice = createSlice({
  name: "dialogue",
  initialState,
  reducers: {
    replaceImage: (state, action: PayloadAction<DialogueFile>) => {
      state.image = action.payload
    },
    replaceMessage: (state, action: PayloadAction<DialogueMessage>) => {
      state.message = action.payload
    },
    addResponse: (state, action: PayloadAction<any>) => {
      state.responses = [...state.responses, action.payload]
    },
  },
})

export const { replaceImage, replaceMessage, addResponse } = slice.actions

export const selectDialogue = (state: RootState) => state.dialogue
export const selectImage = (state: RootState) => state.dialogue.image
export const selectMessage = (state: RootState) => state.dialogue.message
export const selectResponses = (state: RootState) => state.dialogue.responses

export const dialogueReducer = slice.reducer

export default dialogueReducer
