import getDeviceList from "../getDeviceList"

const verifyDeviceAvailability = (name: PermissionName): boolean => {
  const audioInputDevices = getDeviceList("audioinput")
  const videoInputDevices = getDeviceList("videoinput")

  if (name === "microphone" && audioInputDevices.length === 0) {
    return false
  }

  if (name === "camera" && videoInputDevices.length === 0) {
    return false
  }

  return true
}

export default verifyDeviceAvailability
