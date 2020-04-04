/** @jsx jsx */
/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"

import { Box, jsx, SxStyleProp, Text } from "theme-ui"

import { FiPause, FiPlay } from "react-icons/fi"

const ContainerStyle: SxStyleProp = {
  maxWidth: ["12/12", "10/12", "9/12"],

  backgroundColor: "underBase",
  width: "100%",
  color: "starWhite",
  fontSize: 2,
  borderRadius: "xxxl",

  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "starBase",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  px: 3,
  py: "0.75rem",

  my: 3,
}

const TimelineBase: SxStyleProp = {
  height: "inherit",
  borderRadius: "inherit",

  backgroundColor: "inherit",

  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "100%",
}

const TimelineElapsed: SxStyleProp = {
  height: "inherit",
  borderRadius: "inherit",
  borderTopRightRadius: "0",
  borderBottomRightRadius: "0",

  backgroundColor: "starWhite",

  transition: "0.5s ease all",

  flexGrow: 1,
  flexShrink: 0,
  flexBasis: "20px",
}

const TimelineContainer: SxStyleProp = {
  flexGrow: 1,
  width: "100%",

  backgroundColor: "moonBase",

  height: "4px",
  borderRadius: "full",

  ml: 3,
  mr: 2,

  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
}

const PlayPauseIcon: SxStyleProp = {
  width: "1.3em",
  height: "1.3em",
  stroke: "starWhite",
}

interface Props extends React.HTMLProps<HTMLAudioElement> {}

const AudioPlayerContainer = React.forwardRef<HTMLAudioElement, Props>(
  (props, ref) => {
    if (!props.controls) {
      return (
        <React.Fragment>
          <audio ref={ref} {...props} />
        </React.Fragment>
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
      <React.Fragment>
        <Box sx={ContainerStyle}>
          {isPlaying ? (
            <FiPause sx={PlayPauseIcon} onClick={handlePause} />
          ) : (
            <FiPlay sx={PlayPauseIcon} onClick={handlePlay} />
          )}
          <Box sx={TimelineContainer}>
            <Box
              sx={{
                ...TimelineElapsed,
                flexBasis: `${(currentTime / duration) * 100}%`,
              }}
            />
            <Box sx={TimelineBase} />
          </Box>
          <Text>{currentTime.toFixed(0)}s</Text>
        </Box>
        <audio
          ref={ref}
          {...props}
          onCanPlay={() => setIsPlayable(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onDurationChange={handleDurationChange}
          onTimeUpdate={handleTimeUpdate}
          sx={{ display: "none" }}
        />
      </React.Fragment>
    )
  },
)

export default AudioPlayerContainer
