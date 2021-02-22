import { useEffect, useMemo } from "react"
import { useDispatch } from "react-redux"

import { setError, setSpeechDetection } from "Features/live"

export const SpeechRecognitionWorker = () => {
  const dispatch = useDispatch()

  const speechRecognition = useMemo(() => {
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition
    const r = new SpeechRecognition()
    r.continuous = true
    r.interimResults = true
    r.lang = "en-GB"
    r.start()
    return r
  }, [])

  useEffect(() => {
    speechRecognition.addEventListener("error", (e) => {
      const event = e as ErrorEvent
      dispatch(setError(event.error))
    })
    speechRecognition.addEventListener("result", (e) => {
      const event = e as SpeechRecognitionEvent
      const text = event.results[0][0].transcript
      dispatch(setSpeechDetection(text))
    })
  }, [speechRecognition, dispatch])
  return null
}
