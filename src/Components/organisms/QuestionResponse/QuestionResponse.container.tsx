import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { Box, ImageWrapper } from "Components/atoms"
import { AudioResponse, CodeBlock, InputModeChoice } from "Components/molecules"
import {
  resetDialogue,
  resetMessage,
  selectImage,
  selectResponses,
} from "Features/dialogue"

import { FiCornerUpLeft, FiRefreshCw } from "react-icons/fi"

const QuestionResponseContainer: React.FC = () => {
  const dispatch = useDispatch()

  const image = useSelector(selectImage)
  const responses = useSelector(selectResponses)

  const latestResponse = responses[responses.length - 1]

  return (
    <>
      <Box sx={{ maxWidth: "xxl" }}>
        <Box sx={{ maxWidth: "lg" }}>
          {image && <ImageWrapper src={image.url} alt="User upload" />}
        </Box>
        {latestResponse && (
          <>
            <Box sx={{ mt: 4 }}>
              <AudioResponse message={latestResponse.response} />
              <CodeBlock>{JSON.stringify(latestResponse, null, 2)}</CodeBlock>
            </Box>
            <Box sx={{ mt: 4 }}>
              <InputModeChoice
                leftButton={{
                  onClick: () => dispatch(resetMessage()),
                  disabled: false,
                  selected: false,
                  text: "Ask another question",
                  positiveIcon: FiCornerUpLeft,
                  negativeIcon: FiCornerUpLeft,
                }}
                rightButton={{
                  onClick: () => dispatch(resetDialogue()),
                  disabled: false,
                  selected: false,
                  text: "Start again",
                  positiveIcon: FiRefreshCw,
                  negativeIcon: FiRefreshCw,
                }}
              />
            </Box>
          </>
        )}
      </Box>
    </>
  )
}

export default QuestionResponseContainer
