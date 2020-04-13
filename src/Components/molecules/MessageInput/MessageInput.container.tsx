import React from "react"
import { useDispatch } from "react-redux"

import { Box, Text, TextInput } from "Components/atoms"
import { replaceMessage } from "Features/dialogue"

interface Props {
  placeholder: string
  caption?: string
}

const MessageInputContainer: React.FC<Props> = ({ placeholder, caption }) => {
  const dispatch = useDispatch()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const message = event.target.value

    dispatch(replaceMessage({ type: "text", data: message }))
  }

  return (
    <>
      <Box variant="forms.inputMarginWrapper">
        {caption && (
          <Text as="p" variant="caption">
            {caption}
          </Text>
        )}
        <TextInput
          name="message"
          placeholder={placeholder}
          onChange={handleInputChange}
        />
      </Box>
    </>
  )
}

export default MessageInputContainer
