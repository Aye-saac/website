import React from "react"
import { useSelector } from "react-redux"

import { Box } from "Components/atoms"
import {
  AudioRecorder,
  ImageUploader,
  InputModeChoice,
  MessageInput,
  QuestionSubmit,
} from "Components/molecules"
import { selectPermission } from "Features/permission"

const QuestionFormContainer: React.FC = () => {
  const [inputChoice, setInputChoice] = React.useState<"text" | "audio">()

  const permissions = useSelector(selectPermission)

  return (
    <>
      <Box>
        <ImageUploader
          isCameraAllowed={permissions.camera.status === "granted"}
        />

        <InputModeChoice
          inputChoice={inputChoice}
          setInputChoice={setInputChoice}
          isMicGranted={permissions.microphone.status === "granted"}
        />

        <Box sx={{ maxWidth: "xxl" }}>
          {inputChoice === "audio" && (
            <Box variant="audio.wrapper">
              <AudioRecorder />
            </Box>
          )}
          {inputChoice === "text" && (
            <MessageInput
              caption="Watch out for spelling and stuff."
              placeholder="Ask a question about the image."
            />
          )}
        </Box>
        <QuestionSubmit />
      </Box>
    </>
  )
}

export default QuestionFormContainer
