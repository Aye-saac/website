import React from "react"

import { Box, Button, FileInput, TextInput } from "Components/atoms"

import { FiSend } from "react-icons/fi"

const QuestionFormContainer: React.FC = () => {
  return (
    <>
      <Box>
        <FileInput />
        <TextInput placeholder="Ask a question about the image." />
        <Button variant="input" IconComponent={FiSend}>
          Submit
        </Button>
      </Box>
    </>
  )
}

export default QuestionFormContainer
