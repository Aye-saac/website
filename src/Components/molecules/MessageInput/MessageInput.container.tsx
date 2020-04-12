import React from "react"
import { useDispatch } from "react-redux"

import { TextInput } from "Components/atoms"
import { replaceMessage } from "Features/dialogue"

const MessageInputContainer: React.FC = () => {
  const dispatch = useDispatch()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(replaceMessage({ type: "text", data: event.target.value }))
  }

  return (
    <>
      <TextInput
        name="message"
        placeholder="Ask a question about the image."
        onChange={handleInputChange}
      />
    </>
  )
}

export default MessageInputContainer
