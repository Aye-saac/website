import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { AudioRecorder } from "Components"
import { PermissionCheck } from "Components/molecules/PermissionCheck/PermissionCheck"
import { QuestionImageViewer } from "Components/molecules/QuestionImageViewer/QuestionImageViewer"
import { SpeechRecognitionCheck } from "Components/molecules/SpeechRecognitionCheck/SpeechRecognitionCheck"
import { SpeechRecognitionDisplay } from "Components/molecules/SpeechRecognitionDisplay/SpeechRecognitionDisplay"
import { SpeechToTextRecoder } from "Components/molecules/SpeechToTextRecoder/SpeechToTextRecoder"
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

import Webcam from "react-webcam"

import { SpeechRecognitionManager } from "../../Components/molecules/SpeechRecognitionManager/SpeechRecognitionManager"
import { useQuestionManager, useRecordTimeLimit } from "./hooks"
import styles from "./LivePage.module.css"
import { QuestionReader } from "./QuestionReader"
import { QuestionStatus } from "./QuestionStatus/QuestionStatus"

const videoContraints = {
  width: 1280,
  height: 720,
  facingMode: "environment",
}

const MESSAGE_TYPE: "text" | "audio" = "text"

export const LivePage = () => {
  const dispatch = useDispatch()
  const videoRef = useRef(null)
  const speechRecognitionText = useSelector(selectSpeechDetectionText)
  const isRecording = useSelector(selectLiveRecordingStatus)
  const dialogueError = useSelector(selectDialogueError)
  useRecordTimeLimit()
  useQuestionManager()

  useEffect(() => {
    if (speechRecognitionText.includes("go") && !isRecording) {
      dispatch(resetDialogue)
      dispatch(setRecording(true))
      if (videoRef && videoRef.current) {
        const handle = videoRef.current as any
        const image = handle.getScreenshot()
        dispatch(replaceImage({ url: image }))
      }
    }
  }, [speechRecognitionText, videoRef, isRecording, dispatch])

  return (
    <div className={styles.bodyContainer}>
      <PermissionCheck>
        <SpeechRecognitionCheck>
          <div className={styles.columnContainer}>
            <h2>Recording infos</h2>
            {dialogueError && <div>An error occured</div>}
            Recording: {isRecording ? "true" : "false"}
            {MESSAGE_TYPE === "text" ? (
              <SpeechRecognitionManager />
            ) : (
              <AudioRecorder controlled record={isRecording} />
            )}
            <SpeechToTextRecoder recording={isRecording} />
            <SpeechRecognitionDisplay />
            <Webcam
              ref={videoRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={videoContraints}
              width="100%"
              height="100%"
            />
          </div>
          <div className={styles.columnContainer}>
            <h2>Response processing info</h2>
            <QuestionStatus />
            <h3>Image Taken</h3>
            <QuestionImageViewer />
            <h3>Speak engine selection</h3>
            <div className={styles.speakEngineSelection}>
              <QuestionReader />
            </div>
          </div>
        </SpeechRecognitionCheck>
      </PermissionCheck>
    </div>
  )
}
