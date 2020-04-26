import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { PermissionForm } from "Components/molecules"
import {
  selectPermission,
  updateCameraStatus,
  updateMicrophoneStatus,
} from "Features/permission"

import { FiCamera, FiCameraOff, FiMic, FiMicOff } from "react-icons/fi"

const PermissionFormContainer: React.FC = () => {
  const permission = useSelector(selectPermission)
  const dispatch = useDispatch()

  return (
    <>
      <PermissionForm
        title="Can we use your camera?"
        negativeIcon={FiCameraOff}
        positiveIcon={FiCamera}
        onNegativeClick={() => {
          dispatch(updateCameraStatus("denied"))
        }}
        onPositiveClick={() => {
          dispatch(updateCameraStatus("granted"))
        }}
        permissionStatus={permission.camera.status}
      >
        <p>
          When using this application on a mobile device, you take and upload
          photos direct from your camera. Unfortunately, due to time, this
          functionality was not included in the desktop versions of the
          application.
        </p>
      </PermissionForm>
      <PermissionForm
        title="Can we use your microphone?"
        negativeIcon={FiMicOff}
        positiveIcon={FiMic}
        onNegativeClick={() => {
          dispatch(updateMicrophoneStatus("denied"))
        }}
        onPositiveClick={() => {
          navigator.mediaDevices.getUserMedia({ audio: true }).then(() => {
            dispatch(updateMicrophoneStatus("granted"))
          })
        }}
        permissionStatus={permission.microphone.status}
        delay={1}
      >
        <p>
          With access your microphone, you can directly record your voice into
          the application. It just makes things easier. As mentioned above,
          because this is a demo, we do not store any data after you close the
          session.
        </p>
      </PermissionForm>
    </>
  )
}

export default PermissionFormContainer
