import React from "react"

import { ButtonProps } from "theme-ui"

import { Button } from "Components/atoms"

import { motion } from "framer-motion"
import { IconType } from "react-icons"

export interface ButtonState {
  onClick: ButtonProps["onClick"]
  disabled: boolean
  selected: boolean
  text: string
  positiveIcon: IconType
  negativeIcon: IconType
}

const getButtonVariant = ({
  disabled,
  selected,
}: Pick<ButtonState, "disabled" | "selected">) => {
  if (disabled) {
    return "outlineDisabled"
  }

  if (selected) {
    return "outlineSelected"
  }

  return "outline"
}

const InputModeButton: React.FC<ButtonState> = ({
  disabled,
  selected,
  onClick,
  text,
  positiveIcon,
  negativeIcon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <Button
        variant={getButtonVariant({ disabled, selected })}
        onClick={onClick}
        IconComponent={disabled ? negativeIcon : positiveIcon}
        disabled={disabled}
      >
        {text}
      </Button>
    </motion.div>
  )
}

export default InputModeButton
