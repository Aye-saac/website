import React from "react"

import { Box, SxStyleProp } from "theme-ui"

const imageContainer: SxStyleProp = {
  variant: "layout.content",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: "0.75rem",
  backgroundColor: "starWhite",

  lineHeight: 1,

  padding: 2,

  mt: 4,

  img: {
    borderRadius: "0.5rem",
    width: "100%",
  },
}

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ImageWrapper: React.FC<Props> = ({ src, alt, ...props }) => {
  return (
    <>
      <Box sx={imageContainer}>
        <img src={src} alt={alt} {...props} />
      </Box>
    </>
  )
}

export default ImageWrapper
