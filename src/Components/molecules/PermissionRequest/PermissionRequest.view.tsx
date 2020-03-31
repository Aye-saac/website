import React from "react"

import { Container, Heading, Text } from "Components/atoms"

interface Props {
  title: string
  description: React.ReactNode
}

const PermissionRequest: React.FC<Props> = ({ title, description }) => {
  return (
    <>
      <Container variant="components.permissionRequest.container">
        <Heading as="h3" variant="components.permissionRequest.text">
          {title}
        </Heading>
        <Text as="p" variant="components.permissionRequest.description">
          {description}
        </Text>
      </Container>
    </>
  )
}

export default PermissionRequest
