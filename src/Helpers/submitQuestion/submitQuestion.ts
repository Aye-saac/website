import fetch from "node-fetch"
import { v4 as uuidv4 } from "uuid"

interface Request {
  image: Blob
  message: string | Blob
  responses: string
  messageType: "text" | "audio"
}

interface ResponseState {
  data: Record<string, any> & {
    query: string
    response: string
  }
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

  const href = "http://157.245.32.208:5000/submit"

  const response = await fetch(href, {
    method: "POST",
    // @ts-ignore: https://github.com/Microsoft/TypeScript/issues/30584
    body: formData,
  })

  const json: ResponseState = await response.json()

  const { data } = json

  console.log("Response", data)

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
