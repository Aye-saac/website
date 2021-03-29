import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { replaceMessage } from "Features/dialogue"

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"

interface SpeechToTextRecoderProps {
  recording: boolean
}

export const SpeechToTextRecoder = ({
  recording,
}: SpeechToTextRecoderProps) => {
  const { transcript } = useSpeechRecognition({
    clearTranscriptOnListen: true,
  })
  const dispatch = useDispatch()

  useEffect(() => {
    if (transcript.length !== 0) {
      dispatch(
        replaceMessage({
          type: "text",
          data: transcript,
        }),
      )
    }
  }, [transcript, dispatch])

  useEffect(() => {
    if (recording) {
      SpeechRecognition.startListening()
    } else {
      SpeechRecognition.stopListening()
    }
  }, [recording])

  return <div>Transcript: {transcript}</div>
}
