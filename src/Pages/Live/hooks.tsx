import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectImage, selectMessage } from "Features/dialogue"
import { sendQuestion } from "Features/dialogue/dialogueThunk"
import {
  selectLiveRecordingStatus,
  selectLiveState,
  setQuestionSend,
  setRecording,
} from "Features/live"

const RECORD_TIME_MS = 5 * 1000

export const useRecordTimeLimit = () => {
  const dispatch = useDispatch()
  const isRecording = useSelector(selectLiveRecordingStatus)
  const [startRecordingTime, setStartRecordingTime] = useState<number>(0)

  const stopRecording = useCallback(() => {
    dispatch(setRecording(false))
  }, [dispatch])

  useEffect(() => {
    if (isRecording) {
      if (startRecordingTime === 0) {
        setStartRecordingTime(Date.now())
      }
      const startTime =
        startRecordingTime === 0 ? Date.now() : startRecordingTime
      const timeoutMs = startTime - Date.now() + RECORD_TIME_MS
      if (timeoutMs < 0) return
      const timeout = setTimeout(stopRecording, timeoutMs)
      // eslint-disable-next-line consistent-return
      return () => {
        clearTimeout(timeout)
      }
    }
    if (!isRecording && startRecordingTime !== 0) {
      setStartRecordingTime(0)
    }
  }, [isRecording, startRecordingTime, stopRecording])
}

export const useQuestionManager = () => {
  const { questionSent, recording } = useSelector(selectLiveState)
  const image = useSelector(selectImage)
  const message = useSelector(selectMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(recording, questionSent, image, message)
    if (!recording && !questionSent && image && message) {
      console.log("sending question")
      dispatch(sendQuestion())
      dispatch(setQuestionSend(true))
    }
  }, [questionSent, recording, image, message, dispatch])
}
