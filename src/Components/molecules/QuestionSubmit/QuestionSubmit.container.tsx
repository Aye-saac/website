import React from "react"
import { useDispatch, useSelector } from "react-redux"

import {
  addResponse,
  hideResponse,
  selectImage,
  selectMessage,
  selectResponses,
  showResponse,
} from "Features/dialogue"
import { submitQuestion } from "Helpers"

import QuestionSubmitButton from "./QuestionSubmit.view"

const QuestionSubmitContainer: React.FC = () => {
  // Local state
  const [image, setImage] = React.useState<Blob>()
  const [message, setMessage] = React.useState<Blob | string>()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<boolean>(false)

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

    const responses = new Blob(responseState)

    try {
      const response = await submitQuestion({
        image,
        message,
        responses,
        messageType: messageState.type,
      })

      if (!response.ok) {
        setLoading(false)
        setError(true)
        dispatch(hideResponse())
      }

      dispatch(showResponse())
      dispatch(addResponse(response.body.data))
    } catch (error_) {
      dispatch(hideResponse())
      setError(true)
      setLoading(false)
    }
  }

  return (
    <>
      <QuestionSubmitButton
        onClick={handleSubmit}
        loading={loading}
        error={error}
      />
    </>
  )
}

export default QuestionSubmitContainer
