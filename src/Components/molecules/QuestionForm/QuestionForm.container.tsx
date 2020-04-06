import React from "react"

import { Box, Button, FileInput, TextInput } from "Components/atoms"

import { FiSend } from "react-icons/fi"

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

    console.log(file, message)
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
        <Button variant="input" type="submit" IconComponent={FiSend}>
          Submit
        </Button>
      </Box>
    </>
  )
}

export default QuestionFormContainer
