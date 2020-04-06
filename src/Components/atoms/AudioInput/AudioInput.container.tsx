/**
 * References:
 *  [1] https://stackoverflow.com/q/55499621
 */

/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"

import AudioPlayer from "../AudioPlayer"
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

  const previewRef = React.useRef<HTMLAudioElement>() as React.MutableRefObject<
    HTMLAudioElement
  >
  const capturedRef = React.useRef<
    HTMLAudioElement
  >() as React.MutableRefObject<HTMLAudioElement>

  // Setup and connect the media stream to the state
  const setupStream = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(setMediaStream)
  }

  /**
   * When new data is available, save it in the state
   */
  const handleDataAvailable = ({ data }: any) => {
    dispatchChunks({
      type: "updateChunks",
      payload: data,
    })
  }

  /**
   * When the recording is stopped, update the blob from the data
   */
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

  const toggleRecording = (): void => {
    if (mediaRecorder) {
      isRecording ? mediaRecorder.stop() : mediaRecorder.start()
      setIsRecording(!isRecording)
    }
  }

  const setupPreview = () => {
    if (mediaStream) {
      previewRef.current.srcObject = mediaStream
    }
  }

  const setupCaptured = () => {
    if (stateChunks.blob) {
      const url = URL.createObjectURL(stateChunks.blob)
      capturedRef.current.src = url
    }
  }

  // On mount, get the media stream
  React.useEffect(setupStream, [])

  // On media stream change, update the media recorder
  React.useEffect(getMediaRecorder, [mediaStream])

  // On media stream change, update the audio preview
  React.useEffect(setupPreview, [mediaStream])

  // When the captured audio is updated, update the player for it
  React.useEffect(setupCaptured, [stateChunks])

  return (
    <>
      <AudioPlayer ref={previewRef} autoPlay muted />
      <AudioPlayer ref={capturedRef} controls />
      <Button variant="outline" onClick={toggleRecording}>
        {isRecording ? "Stop recording" : "Start recording"}
      </Button>
    </>
  )
}

export default AudioInputContainer
