import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { FileInput } from "Components/atoms"
import { replaceImage, selectImage } from "Features/dialogue"

interface Props {
  isCameraAllowed: boolean
}

const ImageUploaderContainer: React.FC<Props> = ({ isCameraAllowed }) => {
  const dispatch = useDispatch()
  const image = useSelector(selectImage)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    // Do nothing if no image
    if (event.target.files === null) {
      return
    }

    const imageFile = event.target.files[0]

    // Get local URL for image
    const imageUrl = URL.createObjectURL(imageFile)

    dispatch(replaceImage({ url: imageUrl }))
  }

  return (
    <>
      <FileInput
        name="image"
        onChange={handleImageUpload}
        url={image ? image.url : ""}
        accept="image/*"
        capture={isCameraAllowed}
      >
        {isCameraAllowed ? "Capture and upload photo" : "Upload file"}
      </FileInput>
    </>
  )
}

export default ImageUploaderContainer
