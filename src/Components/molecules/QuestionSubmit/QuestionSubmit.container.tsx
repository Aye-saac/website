import React from "react"
import { useSelector } from "react-redux"

import { Button } from "Components/atoms"
import { selectImage, selectMessage, selectResponses } from "Features/dialogue"

import { FiSend } from "react-icons/fi"

const QuestionSubmitContainer: React.FC = () => {
  // Local state
  const [image, setImage] = React.useState<Blob>()
  const [message, setMessage] = React.useState<Blob | string>()

  // Application state
  const imageState = useSelector(selectImage)
  const messageState = useSelector(selectMessage)
  const responseState = useSelector(selectResponses)

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

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (!image || !message || !responseState) {
      return
    }

    const responses = new Blob(responseState)

    const formData = new FormData()
    formData.append("message", message)
    formData.append("image", image)
    formData.append("responses", responses)

    // fetch("http://127.0.0.1:5000/submit", {
    //   method: "POST",
    //   // @ts-ignore: https://github.com/Microsoft/TypeScript/issues/30584
    //   body: formData,
    // })
  }

  return (
    <>
      <Button
        variant="input"
        type="submit"
        IconComponent={FiSend}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </>
  )
}

export default QuestionSubmitContainer
