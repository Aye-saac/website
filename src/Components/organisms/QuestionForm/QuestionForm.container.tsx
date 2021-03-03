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

import { AnimateSharedLayout, motion } from "framer-motion"
import { FiMessageSquare, FiMic, FiMicOff } from "react-icons/fi"

const QuestionFormContainer: React.FC = () => {
  const [inputChoice, setInputChoice] = React.useState<"text" | "audio">()

  const permissions = useSelector(selectPermission)

  return (
    <>
      <Box>
        <AnimateSharedLayout>
          <motion.div layoutId="imageUploader" animate>
            <ImageUploader
              isCameraAllowed={permissions.camera.status === "granted"}
            />
          </motion.div>

          <motion.div layoutId="inputModeSelector" animate>
            <InputModeChoice
              leftButton={{
                onClick: () => setInputChoice("audio"),
                disabled: permissions.microphone.status !== "granted",
                selected: inputChoice === "audio",
                text: "Record your question",
                positiveIcon: FiMic,
                negativeIcon: FiMicOff,
              }}
              rightButton={{
                onClick: () => setInputChoice("text"),
                disabled: false,
                selected: inputChoice === "text",
                text: "Write your question",
                positiveIcon: FiMessageSquare,
                negativeIcon: FiMessageSquare,
              }}
            />
          </motion.div>

          <Box sx={{ maxWidth: "xxl" }}>
            {inputChoice === "audio" && (
              <Box variant="audio.wrapper">
                <AudioRecorder infoText />
              </Box>
            )}
            {inputChoice === "text" && (
              <motion.div animate layoutId="textInput">
                <MessageInput
                  caption="Watch out for spelling and stuff."
                  placeholder="Ask a question about the image."
                />
              </motion.div>
            )}
          </Box>
          <motion.div animate layoutId="submitButton">
            <QuestionSubmit />
          </motion.div>
        </AnimateSharedLayout>
      </Box>
    </>
  )
}

export default QuestionFormContainer
