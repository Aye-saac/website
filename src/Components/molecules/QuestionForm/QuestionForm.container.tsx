import React from "react"

import { Box, Button, FileInput, TextInput } from "Components/atoms"

import fetch from "node-fetch"
import { FiSend } from "react-icons/fi"

import AudioRecorder from "../AudioRecorder"

const QuestionFormContainer: React.FC = () => {
  const [file, setFile] = React.useState<File>()
  const [fileUrl, setFileUrl] = React.useState<string>("")
  const [message, setMessage] = React.useState<string>("")

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Do nothing if no file
    if (event.target.files === null) {
      return
    }

    const uploadedFile = event.target.files[0]
    const uploadedFileUrl = URL.createObjectURL(uploadedFile)

    setFile(uploadedFile)
    setFileUrl(uploadedFileUrl)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault()

    // Guard clause
    if (!file || message.length === 0) {
      return
    }

    const fileAsBlob = new Blob([file])

    const formData = new FormData()

    formData.append("message", message)
    formData.append("file", fileAsBlob, "image")

    console.log(formData.get("message"), formData.get("file"))

    const test = fetch("http://localhost:3001/submit", {
      method: "POST",
      // @ts-ignore: https://github.com/Microsoft/TypeScript/issues/30584
      body: formData,
    })

    console.log(test)
  }

  return (
    <>
      <Box as="form" onSubmit={handleSubmit}>
        <FileInput
          name="image"
          onChange={handleFileChange}
          url={fileUrl}
          accept="image/*"
          capture
        />
        <TextInput
          name="message"
          placeholder="Ask a question about the image."
          onChange={handleInputChange}
        />
        <AudioRecorder />
        <Button variant="input" type="submit" IconComponent={FiSend}>
          Submit
        </Button>
      </Box>
    </>
  )
}

export default QuestionFormContainer
