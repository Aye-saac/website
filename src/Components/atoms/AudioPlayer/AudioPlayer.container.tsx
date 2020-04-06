/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"

import { Box, Text } from "theme-ui"

import { FiPause, FiPlay } from "react-icons/fi"

interface Props extends React.HTMLProps<HTMLAudioElement> {}

const AudioPlayerContainer = React.forwardRef<HTMLAudioElement, Props>(
  (props, ref) => {
    if (!props.controls) {
      return (
        <>
          <audio ref={ref} {...props} />
        </>
      )
    }

    const [isPlayable, setIsPlayable] = React.useState<boolean>(false)
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false)
    const [duration, setDuration] = React.useState<number>(100)
    const [currentTime, setCurrentTime] = React.useState<number>(0)

    const currentRef = ref as React.RefObject<HTMLAudioElement>
    const { current } = currentRef

    const handleDurationChange = () => {
      if (isPlayable && current) {
        if (current.duration) {
          setDuration(current.duration)
        }
      }
    }

    const handleTimeUpdate = () => {
      if (isPlayable && current) {
        if (current.currentTime) {
          setCurrentTime(current.currentTime)
        }
      }
    }

    const handlePlay = () => {
      if (isPlayable && current) {
        current.play()
      }
    }

    const handlePause = () => {
      if (isPlayable && current) {
        current.pause()
      }
    }

    return (
      <>
        <Box variant="audio.container">
          {isPlaying ? (
            <FiPause onClick={handlePause} />
          ) : (
            <FiPlay onClick={handlePlay} />
          )}
          <Box variant="audio.timeline.container">
            <Box
              sx={{
                variant: "audio.timeline.elapsed",
                flexBasis: `${(currentTime / duration) * 100}%`,
              }}
            />
            <Box variant="audio.timeline.base" />
          </Box>
          <Text>{currentTime.toFixed(0)}s</Text>
        </Box>
        <Box sx={{ display: "none" }}>
          <audio
            ref={ref}
            {...props}
            onCanPlay={() => setIsPlayable(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onDurationChange={handleDurationChange}
            onTimeUpdate={handleTimeUpdate}
            css={{ display: "none" }}
          />
        </Box>
      </>
    )
  },
)

export default AudioPlayerContainer
