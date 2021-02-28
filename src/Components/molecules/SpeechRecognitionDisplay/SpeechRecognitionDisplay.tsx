import React from "react"
import { useSelector } from "react-redux"

import {
  selectLiveSpeechDetectionError,
  selectSpeechDetectionText,
} from "Features/live"

export const SpeechRecognitionDisplay = () => {
  const text = useSelector(selectSpeechDetectionText)
  const error = useSelector(selectLiveSpeechDetectionError)
  if (error) {
    return <div>{error}</div>
  }
  return <div>{text}</div>
}
