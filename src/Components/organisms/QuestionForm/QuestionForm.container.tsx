import React from "react"

import { Box, Button, FileInput, TextInput } from "Components/atoms"
import { AudioRecorder } from "Components/molecules"

import fetch from "node-fetch"
import { FiSend } from "react-icons/fi"

const QuestionFormContainer: React.FC = () => {
  const [image, setImage] = React.useState<File>()
  const [imageUrl, setImageUrl] = React.useState<string>("")

  const [message, setMessage] = React.useState<string>("")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Do nothing if no image
    if (event.target.files === null) {
      return
    }

    const uploadedImage = event.target.files[0]
    const uploadedImageUrl = URL.createObjectURL(uploadedImage)

    setImage(uploadedImage)
    setImageUrl(uploadedImageUrl)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault()

    // Guard clause
    if (!image || message.length === 0) {
      return
    }

    const imageAsBlob = new Blob([image])

    const formData = new FormData()

    formData.append("message", message)
    formData.append("image", imageAsBlob, "image")

    fetch("http://127.0.0.1:5000/submit", {
      method: "POST",
      // @ts-ignore: https://github.com/Microsoft/TypeScript/issues/30584
      body: formData,
    })
  }

  return (
    <>
      <Box as="form" onSubmit={handleSubmit}>
        <FileInput
          name="image"
          onChange={handleFileChange}
          url={imageUrl}
          accept="image/*"
          capture
        />
        <TextInput
          name="message"
          placeholder="Ask a question about the image."
          onChange={handleInputChange}
        />
        <Box variant="audio.wrapper">
          <AudioRecorder />
        </Box>
        <Button variant="input" type="submit" IconComponent={FiSend}>
          Submit
        </Button>
      </Box>
    </>
  )
}

export default QuestionFormContainer
