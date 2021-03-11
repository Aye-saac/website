import React from "react"

import { Button } from "Components/atoms"

import { IconType } from "react-icons"

import PermissionForm from "./PermissionForm.view"

interface Props {
  title: string
  children: React.ReactNode
  positiveIcon: IconType
  negativeIcon: IconType
  onNegativeClick?: () => void
  onPositiveClick?: () => void
  permissionStatus: PermissionState
  delay?: number
}

const PermissionFormContainer: React.FC<Props> = ({
  title,
  children,
  positiveIcon,
  negativeIcon,
  onNegativeClick,
  onPositiveClick,
  permissionStatus,
  delay,
}) => {
  const isLeftSelected = permissionStatus !== "granted"
  const isRightSelected = !isLeftSelected

  const handleSelectNegative = () => {
    onNegativeClick && onNegativeClick()
  }

  const handleSelectPositive = () => {
    onPositiveClick && onPositiveClick()
  }

  return (
    <>
      <PermissionForm
        delay={delay}
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
