import React from "react"

import { Box, Input, InputProps } from "theme-ui"

import { FiMessageSquare } from "react-icons/fi"

type InputRef = React.Ref<HTMLInputElement>

interface Props extends InputProps {
  placeholder?: string
  ref?: InputRef
  disableChange?: boolean
}

const TextInput: React.FC<Props> = ({
  placeholder,
  ref,
  disableChange = false,
  onChange,
}) => {
  const [isFocus, setIsFocus] = React.useState(false)
  const [value, setValue] = React.useState("")

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    setIsFocus(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disableChange) {
      setValue(event.target.value)

      if (onChange) {
        onChange(event)
      }
    }
  }

  return (
    <>
      <Box
        variant="forms.inputWrapper"
        sx={{ borderColor: isFocus ? "starBase" : "moonBase" }}
      >
        <FiMessageSquare />
        <Input
          placeholder={placeholder}
          ref={ref}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </Box>
    </>
  )
}

export default TextInput
