import React from "react"

import { Container, Heading, QuestionForm, Section, Text } from "Components"

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
          <QuestionForm />
        </Container>
      </Section>
    </>
  )
}

export default QuestionPage
