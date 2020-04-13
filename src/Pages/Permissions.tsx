import React from "react"

import {
  Box,
  Button,
  Container,
  Heading,
  PermissionFormContainer,
  Section,
  Text,
} from "Components"

import { FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

const PermissionsPage: React.FC = () => {
  return (
    <>
      <Section>
        <Container>
          <Heading as="h2" variant="heading.h2">
            Permissions.
          </Heading>
          <Text>
            We require some permissions in order to use the application as
            intended. You can choose to accept any many as you want. Reasons for
            why we need each one are listed too.
          </Text>
        </Container>
        <Container>
          <PermissionFormContainer />
        </Container>
        <Container>
          <Text>
            By clicking continue, you agree to use, and not abuse, the
            application. You also agree to abide by other privacy stuff. Note
            that all software here is without warranty and we hold no liability
            for any issues that can go wrong.
          </Text>
          <Link to="/question">
            <Box variant="styles.a">
              <Button IconComponent={FiChevronRight}>Continue</Button>
            </Box>
          </Link>
        </Container>
      </Section>
    </>
  )
}

export default PermissionsPage
