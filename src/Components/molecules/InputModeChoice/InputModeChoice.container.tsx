import React from "react"

import InputModeChoiceView from "./InputModeChoice.view"

interface Props {
  isMicGranted: boolean
  inputChoice: "text" | "audio" | undefined

  handleInputChoiceText: () => void
  handleInputChoiceAudio: () => void
}

const InputModeChoiceContainer: React.FC<Props> = ({
  inputChoice,
  isMicGranted,
  handleInputChoiceText,
  handleInputChoiceAudio,
}) => {
  if (!isMicGranted) {
    return (
      <>
        <InputModeChoiceView
          leftButton={{
            onClick: handleInputChoiceAudio,
            disabled: !isMicGranted,
            selected: inputChoice === "audio",
          }}
          rightButton={{
            onClick: handleInputChoiceText,
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
          onClick: handleInputChoiceAudio,
          disabled: false,
          selected: inputChoice === "audio",
        }}
        rightButton={{
          onClick: handleInputChoiceText,
          disabled: false,
          selected: inputChoice === "text",
        }}
      />
    </>
  )
}

export default InputModeChoiceContainer
