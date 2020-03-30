import React from "react"

import { Box, SxProps } from "theme-ui"

interface Props extends SxProps {
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <Box as="section" variant="styles.section" {...props}>
        {children}
      </Box>
    </>
  )
}

export default Section
