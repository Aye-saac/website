import React from "react"

import { Button, Spinner } from "Components/atoms"

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
      <Button variant="input" type="submit" IconComponent={FiSend} {...props}>
        Something went wrong
      </Button>
    </>
  )
}

export default QuestionSubmitView
