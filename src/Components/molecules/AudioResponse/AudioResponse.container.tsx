import React from "react"

import { AudioPlayer, Box, TextInput } from "Components/atoms"

const santiseMessage = (message: string) => {
  return encodeURIComponent(message)
}

interface Props {
  message: string
}

const AudioResponseContainer: React.FC<Props> = ({ message }) => {
  const gttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=`

  const audioRef = React.useRef<HTMLAudioElement>() as React.MutableRefObject<
    HTMLAudioElement
  >

  if (!message) {
    return <></>
  }

  return (
    <>
      <Box variant="audio.responseWrapper">
        <AudioPlayer
          noBorder
          controls
          ref={audioRef}
          src={`${gttsUrl}${santiseMessage(message)}`}
        />
        <TextInput
          disabled
          noBorder
          disableChange
          placeholder={message}
          value={message}
        />
      </Box>
    </>
  )
}

export default AudioResponseContainer
