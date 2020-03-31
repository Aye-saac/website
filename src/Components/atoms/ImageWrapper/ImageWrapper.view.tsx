import React from "react"

import { Box } from "theme-ui"

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ImageWrapper: React.FC<Props> = ({ src, alt, ...props }) => {
  return (
    <>
      <Box variant="image.container">
        <img src={src} alt={alt} {...props} />
      </Box>
    </>
  )
}

export default ImageWrapper
