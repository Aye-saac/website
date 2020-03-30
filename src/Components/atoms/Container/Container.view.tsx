import React from "react"

import { Box, SxProps } from "theme-ui"

interface Props extends SxProps {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <Box as="div" variant="styles.container" {...props}>
        {children}
      </Box>
    </>
  )
}

export default Container
