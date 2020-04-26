import React from "react"

import { Box, Text } from "Components/atoms"

import ChoiceButton, { ButtonState } from "./InputModeButton"

interface Props {
  leftButton: ButtonState
  rightButton: ButtonState
}

const InputModeChoice: React.FC<Props> = ({ leftButton, rightButton }) => {
  return (
    <>
      <Box
        sx={{
          my: 5,

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "xl",
        }}
      >
        <Box sx={{ width: "45%" }}>
          <ChoiceButton {...leftButton} />
        </Box>
        <Text variant="caption">or</Text>
        <Box sx={{ width: "45%" }}>
          <ChoiceButton {...rightButton} />
        </Box>
      </Box>
    </>
  )
}

export default InputModeChoice
