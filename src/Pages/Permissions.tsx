import React, { Fragment } from "react"

import { Box, Button, Heading, Section, Text } from "Components/atoms"

import { Link as RouteLink } from "react-router-dom"

const PermissionsPage: React.FC = () => {
  return (
    <Fragment>
      <Section>
        <Box variant="styles.container">
          <Heading as="h2" variant="heading.h2">
            Permissions.
          </Heading>
          <Text variant="primary">
            We require some permissions in order to use the application as
            intended. You can choose to accept any many as you want. Reasons for
            why we need each one are listed too.
          </Text>
          <RouteLink to="/question">
            <Button>Continue</Button>
          </RouteLink>
        </Box>
      </Section>
    </Fragment>
  )
}

export default PermissionsPage
