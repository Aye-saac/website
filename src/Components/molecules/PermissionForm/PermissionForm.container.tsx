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
  const [isLeftSelected, setIsLeftSelected] = React.useState<boolean>()
  const [isRightSelected, setIsRightSelected] = React.useState<boolean>()

  React.useEffect(() => {
    if (permissionStatus === "granted") {
      setIsRightSelected(true)
      setIsLeftSelected(false)
    }
    if (permissionStatus === "denied") {
      setIsLeftSelected(true)
      setIsRightSelected(false)
    }
  }, [permissionStatus])

  const handleSelectNegative = () => {
    setIsLeftSelected(true)
    setIsRightSelected(false)
    onNegativeClick && onNegativeClick()
  }

  const handleSelectPositive = () => {
    setIsLeftSelected(false)
    setIsRightSelected(true)
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
