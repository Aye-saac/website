import React, { Fragment } from "react"

import { Box, Button, Heading, Text } from "Components"

import { Link } from "react-router-dom"

const Permission: React.FC = () => {
  return (
    <Fragment>
      <Box variant="styles.container">
        <Heading as="h1">Ayesaac</Heading>
        <div>
          <Heading as="h2">Permissions</Heading>
          <Text>No permissions are needed right now.</Text>
          <Link to="/">
            <Button>Continue</Button>
          </Link>
        </div>
      </Box>
    </Fragment>
  )
}

export default Permission
