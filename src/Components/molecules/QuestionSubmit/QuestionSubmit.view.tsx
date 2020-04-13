import React from "react"

import { Button, Spinner, Text } from "Components/atoms"

import { FiAlertCircle, FiSend } from "react-icons/fi"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  error?: boolean
}

const QuestionSubmitView: React.FC<Props> = ({ loading, error, ...props }) => {
  if (loading) {
    return (
      <>
        <Button variant="input" type="submit" {...props}>
          <Spinner />
        </Button>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Button
          variant="error"
          type="submit"
          IconComponent={FiAlertCircle}
          {...props}
        >
          Something went wrong
        </Button>
      </>
    )
  }

  return (
    <>
      <Text as="p" variant="caption">
        Just a note: it might take us a minute to get your answer.
      </Text>
      <Button variant="input" type="submit" IconComponent={FiSend} {...props}>
        Submit
      </Button>
    </>
  )
}

export default QuestionSubmitView
