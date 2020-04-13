import React from "react"

import FileInput from "./FileInput.view"

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const FileInputContainer: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <FileInput {...props} />
    </>
  )
}

export default FileInputContainer
