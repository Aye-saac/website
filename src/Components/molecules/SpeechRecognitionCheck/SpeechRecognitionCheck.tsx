import React from "react"

import SpeechRecognition from "react-speech-recognition"

export const SpeechRecognitionCheck: React.FC = ({ children }) => {
  if (SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <>{children}</>
  }
  return <p>Browser not supported, switch to chrome</p>
}
