/**
 * References:
 *  [1] https://stackoverflow.com/q/55499621
 */

import React from "react"
import { useDispatch } from "react-redux"

import { AudioPlayer, Box, Button, Text } from "Components/atoms"
import { replaceMessage } from "Features/dialogue"
import { serializeBlob } from "Helpers"

import { FiMic, FiMicOff } from "react-icons/fi"

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

type AudioElementRef = React.MutableRefObject<HTMLAudioElement>

const AudioRecorderContainer: React.FC = () => {
  const [mediaStream, setMediaStream] = React.useState<MediaStream>()
  const [mediaRecorder, setMediaRecorder] = React.useState<MediaRecorder>()
  const [isRecording, setIsRecording] = React.useState(false)

  const [stateChunks, dispatchChunks] = React.useReducer(chunkReducer, {
    chunks: [],
    blob: null,
  })

  const dispatchMessage = useDispatch()

  const previewRef = React.useRef<HTMLAudioElement>() as AudioElementRef
  const capturedRef = React.useRef<HTMLAudioElement>() as AudioElementRef

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

      const addFileToStore = (result: FileReader["result"]) => {
        dispatchMessage(replaceMessage({ type: "audio", data: result, url }))
      }

      serializeBlob(stateChunks.blob, addFileToStore)
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
      <Text variant="caption" sx={{ p: { m: 0 } }}>
        <p>You can listen to yourself if you want.</p>
        <Text as="p" sx={{ pb: 1 }}>
          If you can&apos;t hear yourself, we can&apos;t either.
        </Text>
      </Text>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <AudioPlayer ref={capturedRef} controls />
        </Box>
        <Box sx={{ width: ["50%", "50%", "35%"], pl: 2, whiteSpace: "nowrap" }}>
          <Button
            variant={isRecording ? "outlineRecording" : "outline"}
            onClick={toggleRecording}
            IconComponent={isRecording ? FiMicOff : FiMic}
          >
            {isRecording ? "Stop recording" : "Start recording"}
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default AudioRecorderContainer
