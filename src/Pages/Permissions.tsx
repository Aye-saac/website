import React from "react"

import { Button, Container, Heading, Section, Text } from "Components/atoms"

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
        <Container sx={{ my: 6 }}>
          <Heading as="h3" variant="heading.h3">
            Can we use your device&apos;s camera?
          </Heading>
          <Text as="p">
            We require some permissions in order to use the application as
            intended. You can choose to accept any many as you want. Reasons for
            why we need each one are listed too.
          </Text>
        </Container>
        <Container>
          <RouteLink to="/question">
            <Button>Continue</Button>
          </RouteLink>
        </Container>
      </Section>
    </>
  )
}

export default PermissionsPage
