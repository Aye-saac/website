import React from "react"

import { Button, Container, Heading, Section, Text } from "Components/atoms"
import { PermissionFormContainer } from "Components/organisms"

import { Link as RouteLink } from "react-router-dom"

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
          <RouteLink to="/question">
            <Button>Continue</Button>
          </RouteLink>
        </Container>
      </Section>
    </>
  )
}

export default PermissionsPage
