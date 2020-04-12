import React from "react"
import { useSelector } from "react-redux"

import { Box } from "Components/atoms"
import {
  AudioRecorder,
  ImageUploader,
  MessageInput,
  QuestionSubmit,
} from "Components/molecules"
import { selectPermission } from "Features/permission"

const QuestionFormContainer: React.FC = () => {
  const permissions = useSelector(selectPermission)

  return (
    <>
      <Box>
        <ImageUploader
          isCameraAllowed={permissions.camera.status === "granted"}
        />
        {permissions.microphone.status === "granted" ? (
          <Box variant="audio.wrapper">
            <AudioRecorder />
          </Box>
        ) : (
          <MessageInput />
        )}
        <QuestionSubmit />
      </Box>
    </>
  )
}

export default QuestionFormContainer
