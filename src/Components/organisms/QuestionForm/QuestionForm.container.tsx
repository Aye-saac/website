import React from "react"
import { useSelector } from "react-redux"

import { Box, Button } from "Components/atoms"
import {
  AudioRecorder,
  ImageUploader,
  MessageInput,
} from "Components/molecules"
import { selectImage, selectMessage, selectResponses } from "Features/dialogue"
import { selectPermission } from "Features/permission"

import { FiSend } from "react-icons/fi"

const QuestionFormContainer: React.FC = () => {
  const [image, setImage] = React.useState<Blob>()
  const [message, setMessage] = React.useState<Blob | string>()

  const permissions = useSelector(selectPermission)
  const imageState = useSelector(selectImage)
  const messageState = useSelector(selectMessage)
  const responseState = useSelector(selectResponses)

  React.useEffect(() => {
    if (imageState) {
      fetch(imageState.url)
        .then((response) => response.blob())
        .then(setImage)
    }
  }, [imageState])

  React.useEffect(() => {
    if (messageState) {
      if (messageState.type === "audio") {
        fetch(messageState.url)
          .then((response) => response.blob())
          .then(setMessage)
      }
      if (messageState.type === "text") {
        setMessage(messageState.data)
      }
    }
  }, [messageState])

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
      <Button>
        <ImageUploader
          isCameraAllowed={permissions.camera.status === "granted"}
        />

        {permissions.microphone.status === "granted" ? (
          <Box variant="audio.wrapper">
            <AudioRecorder />
          </Box>
        ) : (
          <MessageInput />
        )}

        <Button
          variant="input"
          type="submit"
          IconComponent={FiSend}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Button>
    </>
  )
}

export default QuestionFormContainer
