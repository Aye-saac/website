import React from "react"

import { PermissionForm } from "Components/molecules"

import { FiCamera, FiCameraOff, FiMic, FiMicOff } from "react-icons/fi"

const PermissionFormContainer: React.FC = () => {
  return (
    <>
      <PermissionForm
        title="Can we use your camera?"
        negativeIcon={FiCameraOff}
        positiveIcon={FiCamera}
      >
        <p>
          With access your camera, you can directly take pictures and submit
          them to the application. It just makes things easier. As mentioned
          above, because this is a demo, we do not store any data after you
          close the session.
        </p>
      </PermissionForm>
      <PermissionForm
        title="Can we use your microphone?"
        negativeIcon={FiMicOff}
        positiveIcon={FiMic}
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
