import React, { useCallback, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Container } from "Components"
import { PermissionCheck } from "Components/molecules/PermissionCheck/PermissionCheck"
import { SpeechRecognitionCheck } from "Components/molecules/SpeechRecognitionCheck/SpeechRecognitionCheck"
import { SpeechRecognitionDisplay } from "Components/molecules/SpeechRecognitionDisplay/SpeechRecognitionDisplay"
import { StreamCamera } from "Components/molecules/VideoStream/StreamCamera"
import {
  selectLiveRecordingStatus,
  selectSpeechDetectionText,
  setRecording,
} from "Features/live"

import { SpeechRecognitionManager } from "./SpeechRecognitionManager"

export const LivePage = () => {
  const dispatch = useDispatch()
  const videoRef = useRef(null)
  const [, setImage] = useState<Blob | null>(null)
  const speechRecognitionText = useSelector(selectSpeechDetectionText)
  const isRecording = useSelector(selectLiveRecordingStatus)

  const onCapture = useCallback(async (blob: Blob) => {
    setImage(blob)
  }, [])

  useEffect(() => {
    if (speechRecognitionText.includes("go") && !isRecording) {
      dispatch(setRecording(true))
      if (videoRef && videoRef.current) {
        const handle = videoRef.current as any
        handle.handleCapture()
      }
    }
  }, [speechRecognitionText, videoRef, isRecording, dispatch])

  return (
    <Container>
      <PermissionCheck>
        <SpeechRecognitionCheck>
          <SpeechRecognitionManager />
          <StreamCamera ref={videoRef} onCapture={onCapture} />
          <SpeechRecognitionDisplay />
        </SpeechRecognitionCheck>
      </PermissionCheck>
    </Container>
  )
}
