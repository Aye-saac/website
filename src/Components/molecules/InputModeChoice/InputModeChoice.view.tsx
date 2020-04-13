import React from "react"

import { ButtonProps } from "theme-ui"

import { Box, Button, Text } from "Components/atoms"

import { FiMessageSquare, FiMic, FiMicOff } from "react-icons/fi"

interface ButtonState {
  onClick: ButtonProps["onClick"]
  disabled: boolean
  selected: boolean
}

const getButtonVariant = (buttonState: ButtonState) => {
  const { disabled, selected } = buttonState

  if (disabled) {
    return "outlineDisabled"
  }

  if (selected) {
    return "outlineSelected"
  }

  return "outline"
}

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
          <Button
            variant={getButtonVariant(leftButton)}
            onClick={leftButton.onClick}
            IconComponent={leftButton.disabled ? FiMic : FiMicOff}
            disabled={leftButton.disabled}
          >
            Record your question
          </Button>
        </Box>
        <Text variant="caption">or</Text>
        <Box sx={{ width: "45%" }}>
          <Button
            variant={getButtonVariant(rightButton)}
            onClick={rightButton.onClick}
            IconComponent={FiMessageSquare}
            disabled={rightButton.disabled}
          >
            Write your question
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default InputModeChoice
