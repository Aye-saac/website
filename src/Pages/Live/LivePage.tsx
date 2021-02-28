import React from "react"

import { Container } from "Components"
import { PermissionCheck } from "Components/molecules/PermissionCheck/PermissionCheck"
import { SpeechRecognitionCheck } from "Components/molecules/SpeechRecognitionCheck/SpeechRecognitionCheck"
import { SpeechRecognitionDisplay } from "Components/molecules/SpeechRecognitionDisplay/SpeechRecognitionDisplay"

import { SpeechRecognitionManager } from "./SpeechRecognitionManager"

export const LivePage = () => {
  return (
    <Container>
      <PermissionCheck>
        <SpeechRecognitionCheck>
          <SpeechRecognitionManager />
          <SpeechRecognitionDisplay />
        </SpeechRecognitionCheck>
      </PermissionCheck>
    </Container>
  )
}
