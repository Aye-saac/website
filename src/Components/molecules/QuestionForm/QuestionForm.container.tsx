import React from "react"

import { AudioInput, Box, Button, FileInput, TextInput } from "Components/atoms"

import { FiSend } from "react-icons/fi"

const QuestionFormContainer: React.FC = () => {
  const [file, setFile] = React.useState<File>()
  const [fileUrl, setFileUrl] = React.useState<string>("")
  const [message, setMessage] = React.useState<string>("")

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Do nothing if no file
    if (event.target.files === null) {
      return
    }

    const uploadedFile = event.target.files[0]
    const uploadedFileUrl = URL.createObjectURL(uploadedFile)

    setFile(uploadedFile)
    setFileUrl(uploadedFileUrl)
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    // Guard clause
    if (!file || message.length === 0) {
      return
    }

    console.log(file, message)
  }

  return (
    <>
      <Box>
        <FileInput onChange={onFileChange} url={fileUrl} accept="image/*" />
        <TextInput
          placeholder="Ask a question about the image."
          onChange={onInputChange}
        />
        <AudioInput />
        <Button variant="input" IconComponent={FiSend} onClick={onSubmit}>
          Submit
        </Button>
      </Box>
    </>
  )
}

export default QuestionFormContainer
