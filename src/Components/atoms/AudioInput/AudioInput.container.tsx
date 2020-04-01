/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"

import Button from "../Button"

interface ChunkState {
  chunks: any[]
  blob: Blob | null
}

interface ChunkAction {
  type: "updateChunks" | "updateBlob" | "resetChunks"
  payload?: Blob
}

const chunkReducer = (state: ChunkState, action: ChunkAction) => {
  switch (action.type) {
    case "updateChunks":
      return { ...state, chunks: [...state.chunks, action.payload] }
    case "updateBlob":
      return {
        chunks: state.chunks,
        blob: new Blob(state.chunks),
      }
    case "resetChunks":
      return {
        ...state,
        chunks: [],
      }
    default:
      throw new Error()
  }
}

const AudioInputContainer: React.FC = () => {
  const [mediaStream, setMediaStream] = React.useState<MediaStream>()
  const [mediaRecorder, setMediaRecorder] = React.useState<MediaRecorder>()
  const [isRecording, setIsRecording] = React.useState(false)

  const [stateChunks, dispatchChunks] = React.useReducer(chunkReducer, {
    chunks: [],
    blob: null,
  })

  // Setup and connect the media stream to the state
  const setupStream = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(setMediaStream)
  }

  // On mount, get the media stream
  React.useEffect(setupStream, [])

  const handleDataAvailable = ({ data }: any) => {
    dispatchChunks({
      type: "updateChunks",
      payload: data,
    })
  }

  const handleStop = () => {
    dispatchChunks({
      type: "updateBlob",
    })
  }

  const getMediaRecorder = () => {
    if (mediaStream) {
      setMediaRecorder(
        Object.assign(new MediaRecorder(mediaStream), {
          ondataavailable: handleDataAvailable,
          onstop: handleStop,
        }),
      )
    }
  }

  React.useEffect(getMediaRecorder, [mediaStream])

  const toggleRecording = (): void => {
    if (mediaRecorder) {
      isRecording ? mediaRecorder.stop() : mediaRecorder.start()
      setIsRecording(!isRecording)
    }
  }

  const previewRef = React.useRef<any>()
  const capturedRef = React.useRef<any>()

  const setupPreview = () => {
    previewRef.current.srcObject = mediaStream
  }

  React.useEffect(setupPreview, [mediaStream])

  const setupCaptured = () => {
    if (stateChunks.blob) {
      const url = URL.createObjectURL(stateChunks.blob)
      capturedRef.current.src = url
    }
  }
  React.useEffect(setupCaptured, [stateChunks])

  return (
    <>
      <audio ref={previewRef} autoPlay muted />
      <audio ref={capturedRef} controls />
      <Button onClick={toggleRecording}>
        {isRecording ? "Stop recording" : "Start recording"}
      </Button>
    </>
  )
}

export default AudioInputContainer
