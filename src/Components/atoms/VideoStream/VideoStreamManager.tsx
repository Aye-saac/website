import { useEffect, useState } from "react"

export function MediaStreamGetter(requestedMedia: any) {
  const [mediaStream, setMediaStream] = useState<{
    error: null | any
    stream: null | MediaStream
  }>({
    error: null,
    stream: null,
  })
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia)
        setMediaStream({ error: null, stream })
      } catch (error) {
        setMediaStream({ error, stream: null })
      }
    }
    if (mediaStream.stream) {
      return function cleanup() {
        // @ts-ignore: Object is possibly 'null'.
        mediaStream.stream.getTracks().forEach((track: any) => {
          track.stop()
        })
      }
    }
    enableStream()
  }, [mediaStream, requestedMedia])
  return mediaStream
}
