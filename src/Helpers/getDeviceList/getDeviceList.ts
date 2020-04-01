const getAllDevices = (): MediaDeviceInfo[] => {
  const allDevices: MediaDeviceInfo[][] = []

  navigator.mediaDevices.enumerateDevices().then((deviceInfo) => {
    allDevices.push(deviceInfo)
  })

  return allDevices.flat()
}

const getDeviceList = (deviceKind?: MediaDeviceKind) => {
  const allDevices = getAllDevices()

  if (deviceKind) {
    return allDevices.filter((device) => device.kind === deviceKind)
  }

  return allDevices
}

export default getDeviceList
