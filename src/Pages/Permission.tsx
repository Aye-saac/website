import React, { Fragment } from "react"

import { Box, Button, Heading, Text } from "Components/atoms"

import { Link } from "react-router-dom"

const Permission: React.FC = () => {
  return (
    <Fragment>
      <Box variant="styles.pageWrapper">
        <Box variant="styles.container">
          <Heading as="h1">Ayesaac</Heading>
          <Box>
            <Heading as="h2">Permissions</Heading>
            <Text>No permissions are needed right now.</Text>
            <Link to="/">
              <Button>Continue</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}

export default Permission
