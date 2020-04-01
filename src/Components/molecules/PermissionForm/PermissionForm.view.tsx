import React from "react"

import { Box, Container, Heading, Text } from "Components/atoms"

interface Props {
  title: string
  description: React.ReactNode
  negativeButton: React.ReactNode
  positiveButton: React.ReactNode
}
const PermissionForm: React.FC<Props> = ({
  title,
  description,
  negativeButton,
  positiveButton,
}) => {
  return (
    <>
      <Container variant="components.permissionForm.container">
        <Heading as="h3" variant="components.permissionForm.title">
          {title}
        </Heading>
        <Text as="div" variant="components.permissionForm.description">
          {description}
        </Text>
        <Box variant="components.permissionForm.buttonContainer">
          {negativeButton}
          {positiveButton}
        </Box>
      </Container>
    </>
  )
}

export default PermissionForm
