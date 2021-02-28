import React from "react"

import { Box, BoxProps } from "theme-ui"

interface Props extends BoxProps {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children, variant, ...props }) => {
  const DEFAULT_VARIANT = "styles.tsx.container"

  return (
    <>
      <Box as="div" variant={variant || DEFAULT_VARIANT} {...props}>
        {children}
      </Box>
    </>
  )
}

export default Container
