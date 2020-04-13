import React from "react"

import { Box, SxStyleProp } from "theme-ui"

import { FiUpload } from "react-icons/fi"

import Button from "../Button"

const inputStyle: SxStyleProp = {
  width: 0,
  height: 0,
  position: "absolute",
  opacity: 0,
  overflow: "hidden",
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const FileInput: React.FC<Props> = ({ onChange, children, ...props }) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <>
      <Box sx={inputStyle}>
        <input
          type="file"
          ref={inputRef}
          name="image"
          onChange={onChange}
          tabIndex={-1}
          {...props}
        />
      </Box>
      <Button
        variant="outline"
        IconComponent={FiUpload}
        onClick={() => {
          inputRef.current?.click()
        }}
      >
        {children}
      </Button>
    </>
  )
}

export default FileInput
