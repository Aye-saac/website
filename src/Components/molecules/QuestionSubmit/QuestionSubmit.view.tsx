import React from "react"

import { Button, Spinner, Text } from "Components/atoms"

import { motion } from "framer-motion"
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
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ width: "max-content" }}
      >
        <Button variant="input" type="submit" IconComponent={FiSend} {...props}>
          Submit
        </Button>
      </motion.div>
    </>
  )
}

export default QuestionSubmitView
