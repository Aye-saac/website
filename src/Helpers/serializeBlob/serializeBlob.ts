const serializeBlob = (
  blob: Blob,
  callback: (arg0: FileReader["result"]) => any,
) => {
  const reader = new FileReader()
  reader.readAsDataURL(blob)

  reader.onloadend = () => {
    const dataUrl = reader.result
    callback(dataUrl)
  }
}

export default serializeBlob
