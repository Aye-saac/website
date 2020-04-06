import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { PermissionForm } from "Components/molecules"
import {
  selectPermission,
  updateCameraAvailability,
  updateCameraStatus,
  updateMicrophoneAvailability,
  updateMicrophoneStatus,
} from "Features/permission"
import { addPermissionChangeListener } from "Helpers"
import { store } from "Store"

import { FiMic, FiMicOff } from "react-icons/fi"

const PermissionFormContainer: React.FC = () => {
  React.useEffect(() => {
    addPermissionChangeListener({
      name: "microphone",
      dispatch: store.dispatch,
      statusAction: updateMicrophoneStatus,
      availabilityAction: updateMicrophoneAvailability,
    })
    addPermissionChangeListener({
      name: "camera",
      dispatch: store.dispatch,
      statusAction: updateCameraStatus,
      availabilityAction: updateCameraAvailability,
    })
  }, [])

  const permission = useSelector(selectPermission)
  const dispatch = useDispatch()

  return (
    <>
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
