import React from "react"

import { Button } from "Components/atoms"

import { IconType } from "react-icons"

import PermissionForm from "./PermissionForm.view"

interface Props {
  title: string
  children: React.ReactNode
  positiveIcon: IconType
  negativeIcon: IconType
  onNegativeClick: () => void
  onPositiveClick: () => void
}

const PermissionFormContainer: React.FC<Props> = ({
  title,
  children,
  positiveIcon,
  negativeIcon,
  onNegativeClick,
  onPositiveClick,
}) => {
  const [isLeftSelected, setIsLeftSelected] = React.useState<boolean>(false)
  const [isRightSelected, setIsRightSelected] = React.useState<boolean>(false)

  const handleSelectNegative = () => {
    setIsLeftSelected(true)
    setIsRightSelected(false)
    onNegativeClick()
  }

  const handleSelectPositive = () => {
    setIsRightSelected(true)
    setIsLeftSelected(false)
    onPositiveClick()
  }

  return (
    <>
      <PermissionForm
        title={title}
        description={children}
        negativeButton={
          <Button
            variant={isLeftSelected ? "outlineSelected" : "outline"}
            IconComponent={negativeIcon}
            onClick={handleSelectNegative}
          >
            No
          </Button>
        }
        positiveButton={
          <Button
            variant={isRightSelected ? "outlineSelected" : "outline"}
            IconComponent={positiveIcon}
            onClick={handleSelectPositive}
          >
            Yes
          </Button>
        }
      />
    </>
  )
}

export default PermissionFormContainer
