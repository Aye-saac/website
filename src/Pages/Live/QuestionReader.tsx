import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectResponses } from "Features/dialogue"
import { selectLiveState, setQuestionRead } from "Features/live"

export const QuestionReader = () => {
  const voices = window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.includes("en"))
  const [selectedVoice, setSelectedVoice] = useState(voices[0])
  const { questionRead, recording } = useSelector(selectLiveState)
  const responses = useSelector(selectResponses)
  const dispatch = useDispatch()

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVoice = voices.find((v) => v.name === e.target.value)
    if (!newVoice) {
      console.error("An error occured selecting the voice")
      return
    }
    setSelectedVoice(newVoice)
  }

  useEffect(() => {
    if (!recording && !questionRead && responses.length > 0) {
      dispatch(setQuestionRead(true))
      console.log(responses)
      responses.forEach((response) => {
        const utter = new SpeechSynthesisUtterance(response.response)
        utter.voice = selectedVoice
        window.speechSynthesis.speak(utter)
      })
    }
  }, [questionRead, responses, dispatch, selectedVoice, recording])

  return (
    <select
      name="voices"
      id="voices"
      value={selectedVoice?.name}
      onChange={onChange}
    >
      {voices.map((voice) => (
        <option key={voice.name} value={voice.name}>
          {voice.name}
        </option>
      ))}
    </select>
  )
}
