import React from "react"
import { useSelector } from "react-redux"

import { ImageWrapper } from "Components/atoms"
import { selectImage } from "Features/dialogue"

export const QuestionImageViewer: React.FC = (props) => {
  const image = useSelector(selectImage)
  if (!image) {
    return null
  }
  return <ImageWrapper src={image.url} {...props} alt="Preview picture" />
}
