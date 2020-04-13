import fetch from "node-fetch"

interface Request {
  body: FormData
}

interface ResponseState {
  data: {
    query: string
    response: string
  }
}

const submitQuestion = async (requestData: Request) => {
  const { body } = requestData

  const href = "http://127.0.0.1:5000/submit"

  const response = await fetch(href, {
    method: "POST",
    // @ts-ignore: https://github.com/Microsoft/TypeScript/issues/30584
    body,
  })

  const json: ResponseState = await response.json()

  const { data } = json

  if (!response.ok) {
    return {
      status: 404,
      ok: false,
      body: {
        success: false,
      },
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
