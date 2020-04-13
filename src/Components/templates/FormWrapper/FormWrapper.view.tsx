import React from "react"

import { Container, Heading, Section, Text } from "Components/atoms"

interface Props {
  title: string
  children: React.ReactNode
  FormComponent: React.ReactNode
}

const FormWrapper: React.FC<Props> = ({ title, children, FormComponent }) => {
  return (
    <>
      <Section>
        <Container>
          <Heading as="h2" variant="heading.h2">
            {title}
          </Heading>
          <Text>{children}</Text>
        </Container>
        <Container>{FormComponent}</Container>
      </Section>
    </>
  )
}

export default FormWrapper
