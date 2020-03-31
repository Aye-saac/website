import React from "react"

import ImageWrapper from "../ImageWrapper"
import FileInput from "./FileInput.view"

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  url?: string
}

const FileInputContainer: React.FC<Props> = ({ onChange, url, ...props }) => {
  return (
    <>
      <FileInput onChange={onChange} {...props} />
      {url && <ImageWrapper src={url} alt="User upload" />}
    </>
  )
}

export default FileInputContainer
