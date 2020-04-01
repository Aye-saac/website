import React from "react"

import { Box } from "theme-ui"

interface Props {
  children: React.ReactNode
}

const AudioInput: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Box>AudioInput</Box>
      {children}
    </>
  )
}

export default AudioInput
