import { createAsyncThunk } from "@reduxjs/toolkit"

import submitQuestion from "Helpers/submitQuestion"
import { RootState } from "Store"

const blobFromUrl = async (url: string) => (await fetch(url)).blob()

export const sendQuestion = createAsyncThunk(
  "dialogue/sendQuestion",
  async (_, { getState }) => {
    const state = getState() as RootState
    const { image, message, responses } = state.dialogue
    if (!message) {
      throw new Error("No message in state")
    }
    if (!image) {
      throw new Error("No image in state")
    }
    const imageBlob = await blobFromUrl(image.url)
    const messageData =
      message.type === "audio" ? await blobFromUrl(message.url) : message.data
    const response = await submitQuestion({
      image: imageBlob,
      message: messageData,
      responses: JSON.stringify(responses),
      messageType: message.type,
    })
    return response
  },
)
