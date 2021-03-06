import React from "react"
import { useDispatch, useSelector } from "react-redux"

import {
  selectDialogueError,
  selectImage,
  selectLoading,
  selectMessage,
  selectResponses,
} from "Features/dialogue"
import { sendQuestion } from "Features/dialogue/dialogueThunk"

import QuestionSubmitButton from "./QuestionSubmit.view"

const QuestionSubmitContainer: React.FC = () => {
  // Local state
  const [image, setImage] = React.useState<Blob>()
  const [message, setMessage] = React.useState<Blob | string>()
  const loading = useSelector(selectLoading)
  const error = useSelector(selectDialogueError)

  // Application state
  const imageState = useSelector(selectImage)
  const messageState = useSelector(selectMessage)
  const responseState = useSelector(selectResponses)

  const dispatch = useDispatch()

  /**
   * When new image uploaded, update local state
   */
  const updateLocalImageState = () => {
    if (imageState) {
      fetch(imageState.url)
        .then((response) => response.blob())
        .then(setImage)
    }
  }

  /**
   * When message is updated, update local state
   */
  const updateLocalMessageState = () => {
    if (messageState) {
      switch (messageState.type) {
        case "audio":
          fetch(messageState.url)
            .then((response) => response.blob())
            .then(setMessage)
          break

        case "text":
          setMessage(messageState.data)
          break

        default:
          break
      }
    }
  }

  React.useEffect(updateLocalImageState, [imageState])

  React.useEffect(updateLocalMessageState, [messageState])

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (!image || !message || !responseState || !messageState) {
      return
    }
    dispatch(sendQuestion())
  }

  return (
    <>
      <QuestionSubmitButton
        onClick={handleSubmit}
        loading={loading}
        error={Boolean(error)}
      />
    </>
  )
}

export default QuestionSubmitContainer
