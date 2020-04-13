import React from "react"

import {
  Box,
  FileInput,
  FileInputProps,
  ImageWrapper,
  Text,
} from "Components/atoms"

interface Props extends FileInputProps {
  caption?: string
  url?: string
  text: string
}

const ImageUploaderView: React.FC<Props> = ({
  caption,
  url,
  text,
  ...props
}) => {
  return (
    <>
      <Box sx={{ maxWidth: "lg" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text as="p" variant="caption" sx={{ width: "30%" }}>
            {caption}
          </Text>
          <Box sx={{ width: "69%" }}>
            <FileInput {...props}>{text}</FileInput>
          </Box>
        </Box>
        {url && <ImageWrapper src={url} alt="User upload" />}
      </Box>
    </>
  )
}

export default ImageUploaderView
