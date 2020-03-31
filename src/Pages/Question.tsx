import React from "react"

import { Container, FileInput, Heading, Section, Text } from "Components/atoms"

const QuestionPage: React.FC = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading as="h2" variant="heading.h2">
            The ask.
          </Heading>
          <Text>
            This is some words of how it is supposed to work, including
            instructions of how to use it.
          </Text>
        </Container>
        <Container>
          <FileInput />
        </Container>
      </Section>
    </>
  )
}

export default QuestionPage
