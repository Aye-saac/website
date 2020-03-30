import React, { Fragment } from "react"

import { Box, Button, Heading, Text } from "Components/atoms"

import { Link } from "react-router-dom"

const PermissionsPage: React.FC = () => {
  return (
    <Fragment>
      <Box variant="styles.pageWrapper">
        <Box variant="styles.container">
          <Heading as="h2">Permissions</Heading>
          <Text>No permissions are needed right now.</Text>
          <Link to="/">
            <Button>Continue</Button>
          </Link>
        </Box>
      </Box>
    </Fragment>
  )
}

export default PermissionsPage
