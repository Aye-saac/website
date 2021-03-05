import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react"

import Measure from "react-measure"

import {
  Button,
  Canvas,
  Container,
  Overlay,
  Video,
  Wrapper,
} from "../../atoms/VideoStream/styles"
import { useCardRatio } from "../../atoms/VideoStream/useCardRatio"
import { useOffsets } from "../../atoms/VideoStream/useOffsets"
import { MediaStreamGetter } from "../../atoms/VideoStream/VideoStreamManager"

const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: "environment" },
}

interface Argument {
  onClear?: () => void
  onCapture: (blob: Blob) => void
}

export const StreamCamera = forwardRef(
  ({ onClear, onCapture }: Argument, ref) => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const mediaStream = MediaStreamGetter(CAPTURE_OPTIONS)
    const [height, setHeight] = React.useState(
      Math.round(window.innerHeight - window.innerHeight * 0.1),
    )
    const [container, setContainer] = useState({ height: 0, width: 0 })
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const [isCanvasEmpty, setIsCanvasEmpty] = useState(true)
    const [aspectRatio, calculateRatio] = useCardRatio(1.33)
    const offsets = useOffsets(
      videoRef.current && videoRef.current.videoWidth,
      videoRef.current && videoRef.current.videoHeight,
      container.width,
      container.height,
    )
    if (
      mediaStream.stream != null &&
      videoRef.current !== null &&
      // @ts-ignore: Object is possibly 'null'.
      !videoRef.current.srcObject
    ) {
      // @ts-ignore: Object is possibly 'null'.
      videoRef.current.srcObject = mediaStream.stream
    }

    function handleCanPlay() {
      if (videoRef && videoRef.current) {
        calculateRatio(
          videoRef.current.videoHeight,
          videoRef.current.videoWidth,
        )
        setIsVideoPlaying(true)
        // @ts-ignore: Object is possibly 'null'.
        videoRef.current.play()
      }
    }

    const handleCapture = useCallback(() => {
      if (!canvasRef || !canvasRef.current) {
        return
      }
      // @ts-ignore: Object is possibly 'null'.
      const context = canvasRef.current.getContext("2d")
      if (!context) {
        return
      }
      context.drawImage(
        // @ts-ignore: Object is possibly 'null'.
        videoRef.current,
        offsets.x,
        offsets.y,
        container.width,
        container.height,
        0,
        0,
        container.width,
        container.height,
      )

      // @ts-ignore: Object is possibly 'null'.
      canvasRef.current.toBlob((blob) => onCapture(blob), "image/jpeg", 1)
      setIsCanvasEmpty(false)
    }, [canvasRef, setIsCanvasEmpty, container, offsets, onCapture])

    useImperativeHandle(
      ref,
      () => ({
        handleCapture,
      }),
      [handleCapture],
    )

    function handleClear() {
      if (!canvasRef || !canvasRef.current) {
        return
      }
      // @ts-ignore: Object is possibly 'null'.
      const context = canvasRef.current.getContext("2d")
      // @ts-ignore: Object is possibly 'null'.
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      if (onClear) onClear()
      setIsCanvasEmpty(true)
    }

    function handleResize(contentRect: any) {
      setHeight(Math.round(window.innerHeight - window.innerHeight * 0.1))
      setContainer({
        height: Math.round(contentRect.bounds.width / aspectRatio),
        width: contentRect.bounds.width,
      })
    }

    return (
      <Measure bounds onResize={handleResize}>
        {({ measureRef }) => (
          <Wrapper>
            <Container
              ref={measureRef}
              style={{
                height: `${container.height}px`,
                maxHeight: height,
              }}
            >
              <Video
                ref={videoRef}
                hidden={!isVideoPlaying}
                onCanPlay={handleCanPlay}
                autoPlay
                playsInline
                muted
                style={{
                  width: "100%",
                  height: "100%",
                  top: `-${offsets.y}px`,
                  left: `-${offsets.x}px`,
                }}
              />

              <Overlay hidden={!isVideoPlaying} />

              <Canvas
                ref={canvasRef}
                width={container.width}
                height={container.height}
              />
            </Container>

            {isVideoPlaying && (
              <Button onClick={isCanvasEmpty ? handleCapture : handleClear}>
                {isCanvasEmpty ? "Take a picture" : "Take another picture"}
              </Button>
            )}
          </Wrapper>
        )}
      </Measure>
    )
  },
)
