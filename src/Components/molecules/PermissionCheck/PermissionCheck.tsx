import React from "react"
import { useSelector } from "react-redux"

import { Button } from "Components/atoms"
import { selectPermission } from "Features/permission"

import { Link } from "react-router-dom"

interface PermissionCheckProps {
  audio?: boolean
  video?: boolean
}

export const PermissionCheck: React.FC<PermissionCheckProps> = ({
  audio,
  video,
  children,
}) => {
  const permissions = useSelector(selectPermission)

  if (
    (audio && permissions.microphone.status !== "granted") ||
    (video && permissions.camera.status !== "granted")
  ) {
    return (
      <div>
        {audio && permissions.microphone.status !== "granted" && (
          <p>Microphone access required</p>
        )}
        {video && permissions.camera.status !== "granted" && (
          <p>Camera access required</p>
        )}
        <Link to="/permissions">
          <Button>Update permission</Button>
        </Link>
      </div>
    )
  }
  return <>{children}</>
}
