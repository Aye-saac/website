import React from "react"

import { AudioPlayer } from "Components/atoms"

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
      <AudioPlayer
        controls
        ref={audioRef}
        src={`${gttsUrl}${santiseMessage(message)}`}
      />
    </>
  )
}

export default AudioResponseContainer
