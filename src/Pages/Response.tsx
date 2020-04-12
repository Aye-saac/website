/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"

import { AudioPlayer, Box, Section } from "Components/atoms"

const santiseMessage = (message: string) => {
  return encodeURIComponent(message)
}

const ResponsePage: React.FC = () => {
  const [message, setMessage] = React.useState<string>()

  const audioRef = React.useRef<HTMLAudioElement>() as React.MutableRefObject<
    HTMLAudioElement
  >

  React.useEffect(() => {
    setMessage(santiseMessage("hello the world"))
  }, [])

  if (!message) {
    return <></>
  }

  return (
    <>
      <Section>
        <Box>words</Box>

        <AudioPlayer
          controls
          ref={audioRef}
          src={`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${message}`}
        />
      </Section>
    </>
  )
}

export default ResponsePage
