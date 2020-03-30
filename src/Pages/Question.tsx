import React, { Fragment } from "react"

import { Box, Heading, Section, Text } from "Components/atoms"

const QuestionPage: React.FC = () => {
  return (
    <Fragment>
      <Section>
        <Box variant="styles.container">
          <Heading as="h2" variant="heading.h2">
            The ask.
          </Heading>
          <Text variant="primary">
            This is some words of how it is supposed to work, including
            instructions of how to use it.
          </Text>
        </Box>
      </Section>
    </Fragment>
  )
}

export default QuestionPage
