import React from "react"
import { useSelector } from "react-redux"

import { selectSpeechDetectionText } from "Features/live"

export const SpeechRecognitionDisplay = () => {
  const text = useSelector(selectSpeechDetectionText)
  return <div>{text}</div>
}
