import fetch from "node-fetch"
import { v4 as uuidv4 } from "uuid"

const fixLocationSecurity = (url: string) => {
  // Check if the location is http or https
  const isHttps = url.startsWith("https")

  if (isHttps) {
    return url
  }

  return url.replace(/(http)/gi, "https")
}

const getUTCTime = () => {
  const now = new Date()

  return now.toUTCString()
}

interface Request {
  image: Blob
  message: string | Blob
  responses: string
  messageType: "text" | "audio"
}

type ResponseState = Record<string, any> & {
  query: string
  response: string
}

const submitQuestion = async ({
  image,
  message,
  responses,
  messageType,
}: Request) => {
  const formData = new FormData()

  if (messageType === "text") {
    formData.append("message", message)
  }

  if (messageType === "audio") {
    formData.append("audio", message)
  }

  formData.append("image", image)
  formData.append("responses", responses)
  formData.append("request_id", uuidv4())

  const domain = "https://droplet.ayesaac.xyz"

  const href = `${domain}/submit`
  // const href = "http://127.0.0.1:5000/submit"

  const timeSent = getUTCTime()

  const request = await fetch(href, {
    method: "POST",
    // @ts-ignore: https://github.com/Microsoft/TypeScript/issues/30584
    body: formData,
  })

  const responseLocation = fixLocationSecurity(request.headers.get("location"))

  // console.log("Request", request, responseLocation)

  const response = await fetch(responseLocation, {
    method: "GET",
  })

  const data: ResponseState = await response.json()

  const timeReceived = getUTCTime()

  // console.log("Response", data)

  if (!response.ok) {
    return {
      status: 404,
      ok: false,
      body: {},
    }
  }

  return {
    status: 200,
    ok: true,
    body: {
      message: data.response,
      data: {
        ...data,
        messageSent: timeSent,
        messageRecieved: timeReceived,
      },
    },
  }
}

export default submitQuestion
