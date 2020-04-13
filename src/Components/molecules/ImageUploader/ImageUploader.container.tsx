import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { replaceImage, selectImage } from "Features/dialogue"

import ImageUploaderView from "./ImageUploader.view"

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
      <ImageUploaderView
        name="image"
        onChange={handleImageUpload}
        url={image ? image.url : ""}
        accept="image/*"
        capture={isCameraAllowed}
        text={image === null ? "Upload an image" : "Upload a different image"}
        caption={
          !image
            ? isCameraAllowed
              ? "This will open your device camera."
              : "Make sure it's a nice clear image."
            : "Something wrong with the image?"
        }
      />
    </>
  )
}

export default ImageUploaderContainer
