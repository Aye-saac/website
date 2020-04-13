import React from "react"

import InputModeChoiceView from "./InputModeChoice.view"

interface Props {
  isMicGranted: boolean
  inputChoice: "text" | "audio" | undefined

  setInputChoice: React.Dispatch<
    React.SetStateAction<"text" | "audio" | undefined>
  >
}

const InputModeChoiceContainer: React.FC<Props> = ({
  inputChoice,
  setInputChoice,
  isMicGranted,
}) => {
  if (!isMicGranted) {
    setInputChoice("text")

    return (
      <>
        <InputModeChoiceView
          leftButton={{
            onClick: () => setInputChoice("audio"),
            disabled: !isMicGranted,
            selected: inputChoice === "audio",
          }}
          rightButton={{
            onClick: () => setInputChoice("text"),
            disabled: false,
            selected: inputChoice === "text",
          }}
        />
      </>
    )
  }

  return (
    <>
      <InputModeChoiceView
        leftButton={{
          onClick: () => setInputChoice("audio"),
          disabled: false,
          selected: inputChoice === "audio",
        }}
        rightButton={{
          onClick: () => setInputChoice("text"),
          disabled: false,
          selected: inputChoice === "text",
        }}
      />
    </>
  )
}

export default InputModeChoiceContainer
