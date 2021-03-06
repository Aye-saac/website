import React, { useCallback, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Container } from "Components"
import { PermissionCheck } from "Components/molecules/PermissionCheck/PermissionCheck"
import { SpeechRecognitionCheck } from "Components/molecules/SpeechRecognitionCheck/SpeechRecognitionCheck"
import { SpeechRecognitionDisplay } from "Components/molecules/SpeechRecognitionDisplay/SpeechRecognitionDisplay"
import { SpeechToTextRecoder } from "Components/molecules/SpeechToTextRecoder/SpeechToTextRecoder"
import { StreamCamera } from "Components/molecules/VideoStream/StreamCamera"
import {
  replaceImage,
  resetDialogue,
  selectDialogueError,
} from "Features/dialogue"
import {
  selectLiveRecordingStatus,
  selectSpeechDetectionText,
  setRecording,
} from "Features/live"

import { useQuestionManager, useRecordTimeLimit } from "./hooks"
import { QuestionReader } from "./QuestionReader"
import { SpeechRecognitionManager } from "./SpeechRecognitionManager"

export const LivePage = () => {
  const dispatch = useDispatch()
  const videoRef = useRef(null)
  const speechRecognitionText = useSelector(selectSpeechDetectionText)
  const isRecording = useSelector(selectLiveRecordingStatus)
  const dialogueError = useSelector(selectDialogueError)
  useRecordTimeLimit()
  useQuestionManager()

  const onCapture = useCallback(
    (blob: Blob) => {
      dispatch(replaceImage({ url: URL.createObjectURL(blob) }))
    },
    [dispatch],
  )

  useEffect(() => {
    if (speechRecognitionText.includes("go") && !isRecording) {
      dispatch(resetDialogue)
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
          {dialogueError && <div>An error occured</div>}
          Recording: {isRecording ? "true" : "false"}
          <SpeechRecognitionManager />
          {/* <AudioRecorder controlled record={isRecording} /> */}
          <SpeechToTextRecoder recording={isRecording} />
          <StreamCamera ref={videoRef} onCapture={onCapture} />
          <SpeechRecognitionDisplay />
          <QuestionReader />
        </SpeechRecognitionCheck>
      </PermissionCheck>
    </Container>
  )
}
