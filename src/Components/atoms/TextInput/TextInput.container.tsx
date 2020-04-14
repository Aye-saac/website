import React from "react"

import { Box, Input, InputProps } from "theme-ui"

import { FiMessageSquare } from "react-icons/fi"

type InputRef = React.Ref<HTMLInputElement>

interface Props extends InputProps {
  placeholder?: string
  ref?: InputRef
  disableChange?: boolean
  noBorder?: boolean
}

const TextInput: React.FC<Props> = ({
  placeholder,
  ref,
  disableChange = false,
  onChange,
  noBorder,
  value,
}) => {
  const [isFocus, setIsFocus] = React.useState(false)
  const [fieldValue, setFieldValue] = React.useState(value || "")

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disableChange) {
      setFieldValue(event.target.value)

      if (onChange) {
        onChange(event)
      }
    }
  }

  return (
    <>
      <Box
        variant={!noBorder ? "forms.inputWrapper" : ""}
        sx={{ borderColor: isFocus ? "starBase" : "moonBase" }}
      >
        <Box variant="forms.inputWrapperPosition">
          <FiMessageSquare />
          <Input
            type="text"
            placeholder={placeholder}
            ref={ref}
            value={fieldValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </>
  )
}

export default TextInput
