import React from "react"

import { Container } from "Components"
import { PermissionCheck } from "Components/molecules/PermissionCheck/PermissionCheck"
import { SpeechRecognitionCheck } from "Components/molecules/SpeechRecognitionCheck/SpeechRecognitionCheck"
import { SpeechRecognitionDisplay } from "Components/molecules/SpeechRecognitionDisplay/SpeechRecognitionDisplay"
import { StreamCamera } from "Components/molecules/VideoStream/StreamCamera"

import { SpeechRecognitionManager } from "./SpeechRecognitionManager"

const debug = (blob: any) => {
  console.log("oui")
  console.log(blob)
}

export const LivePage = () => {
  return (
    <Container>
      <PermissionCheck>
        <SpeechRecognitionCheck>
          <SpeechRecognitionManager />
          <StreamCamera onCapture={debug} onClear={debug} />
          <SpeechRecognitionDisplay />
        </SpeechRecognitionCheck>
      </PermissionCheck>
    </Container>
  )
}
