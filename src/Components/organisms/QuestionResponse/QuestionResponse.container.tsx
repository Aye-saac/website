import React from "react"
import { useSelector } from "react-redux"

import { Box, ImageWrapper } from "Components/atoms"
import { AudioResponse, CodeBlock } from "Components/molecules"
import { selectImage, selectResponses } from "Features/dialogue"

const QuestionResponseContainer: React.FC = () => {
  const image = useSelector(selectImage)
  const responses = useSelector(selectResponses)

  const latestResponse = responses.reverse()[0]

  return (
    <>
      <Box sx={{ maxWidth: "xxl" }}>
        <Box sx={{ maxWidth: "lg" }}>
          {image && <ImageWrapper src={image.url} alt="User upload" />}
        </Box>
        {latestResponse && (
          <>
            <AudioResponse message={latestResponse.response} />
            <CodeBlock>{JSON.stringify(latestResponse, null, 2)}</CodeBlock>
          </>
        )}
      </Box>
    </>
  )
}

export default QuestionResponseContainer
