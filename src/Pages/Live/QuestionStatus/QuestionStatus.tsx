import React from "react"
import { useSelector } from "react-redux"

import { selectResponseText } from "Features/dialogue"
import { selectLiveRecordingStatus } from "Features/live"

export const QuestionStatus = () => {
  const recording = useSelector(selectLiveRecordingStatus)
  const loading = useSelector(selectLiveRecordingStatus)
  const response = useSelector(selectResponseText)

  let text = `Say "go" to start recording`
  if (recording) {
    text = "Waiting the end of recording"
  } else if (loading) {
    text = "We are processing your request"
  } else if (response) {
    text = `Response: ${response}`
  }

  return <div>{text}</div>
}
