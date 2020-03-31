import React from "react"

import FileInput from "./FileInput.view"

const FileInputContainer: React.FC = () => {
  const [url, setURL] = React.useState("")

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Do nothing if no file
    if (event.target.files === null) {
      return
    }

    const file = event.target.files[0]
    const fileURL = URL.createObjectURL(file)

    console.log(file, fileURL)

    setURL(fileURL)
  }

  return (
    <>
      <FileInput onChange={onChange} />
      {url && <img src={url} alt="User uploaded" />}
    </>
  )
}

export default FileInputContainer
