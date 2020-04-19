import fetch from "node-fetch"
import { v4 as uuidv4 } from "uuid"

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

  const href = "http://droplet.ayesaac.xyz:5000/submit"
  // const href = "http://127.0.0.1:5000/submit"

  const request = await fetch(href, {
    method: "POST",
    // @ts-ignore: https://github.com/Microsoft/TypeScript/issues/30584
    body: formData,
  })

  const responseLocation = request.headers.get("location")

  // console.log("Request", request, responseLocation)

  const response = await fetch(responseLocation, { method: "GET" })

  const data: ResponseState = await response.json()

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
      data,
    },
  }
}

export default submitQuestion
