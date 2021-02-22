import React from "react"

const SpeechRecognition =
  window.SpeechRecognition || (window as any).webkitSpeechRecognition

export const SpeechRecognitionCheck: React.FC = ({ children }) => {
  if (SpeechRecognition) {
    return <>{children}</>
  }
  return <p>Browser not supported, switch to chrome</p>
}
