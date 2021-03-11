import "@tensorflow/tfjs"

import { useCallback, useEffect, useMemo, useState } from "react"
import { useDispatch } from "react-redux"

import { setError, setSpeechDetection } from "Features/live"

import * as speechCommands from "@tensorflow-models/speech-commands"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as tf from "@tensorflow/tfjs"

export const SpeechRecognitionManager = () => {
  const dispatch = useDispatch()

  const [ready, setReady] = useState(false)
  const recognizer = useMemo(() => {
    const r = speechCommands.create("BROWSER_FFT")
    r.ensureModelLoaded()
      .then(() => setReady(true))
      .catch((error) => {
        console.error(error)
        dispatch(setError("Failed to load speech model"))
      })
    return r
  }, [setReady, dispatch])

  const onResult = useCallback(
    async (data: speechCommands.SpeechCommandRecognizerResult) => {
      const detectedWords = []
      const dic = recognizer.wordLabels()
      for (let i = 0; i < data.scores.length; i += 1) {
        if (data.scores[i] > 0.75) {
          detectedWords.push(dic[i])
        }
      }
      dispatch(setSpeechDetection(detectedWords.join(" ")))
    },
    [recognizer, dispatch],
  )

  useEffect(() => {
    if (!ready) {
      return
    }
    recognizer.listen(onResult, { probabilityThreshold: 0 })
  }, [recognizer, ready, dispatch, onResult])
  return null
}
