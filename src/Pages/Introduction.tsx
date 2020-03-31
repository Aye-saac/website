import React from "react"

import {
  Box,
  Button,
  Container,
  Heading,
  Section,
  Text,
} from "Components/atoms"

import { FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const IntroductionPage: React.FC = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading as="h1" variant="heading.projectName">
            Ayesaac.
          </Heading>
          <Text as="p" variant="heading.projectSummary">
            An end-to-end aide for blind and partially sighted people.
          </Text>
          <Text as="p">
            This is just a demonstration as part of a project for Heriot-Watt
            University. The full source code for this project and the system are
            available here. We do not store any data as this is just for
            demonstration purposes.
          </Text>
          <Link to="/permissions">
            <Box variant="styles.a">
              <Button IconComponent={FiChevronRight}>Continue</Button>
            </Box>
          </Link>
        </Container>
      </Section>
    </>
  )
}

export default IntroductionPage
