import React from "react"

import { Container } from "Components"
import { PermissionCheck } from "Components/molecules/PermissionCheck/PermissionCheck"
import { SpeechRecognitionCheck } from "Components/molecules/SpeechRecognitionCheck/SpeechRecognitionCheck"
import { SpeechRecognitionDisplay } from "Components/molecules/SpeechRecognitionDisplay/SpeechRecognitionDisplay"

import { SpeechRecognitionWorker } from "./SpeechRecognitionWorker"

export const LivePage = () => {
  return (
    <Container>
      <PermissionCheck audio video>
        <SpeechRecognitionCheck>
          <SpeechRecognitionWorker />
          <SpeechRecognitionDisplay />
        </SpeechRecognitionCheck>
      </PermissionCheck>
    </Container>
  )
}
