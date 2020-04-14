import React from "react"
import { useSelector } from "react-redux"

import { FormWrapper, QuestionForm, QuestionResponse } from "Components"
import { selectShowResponse } from "Features/dialogue"

const QuestionPage: React.FC = () => {
  const showResponse = useSelector(selectShowResponse)

  return (
    <>
      {!showResponse ? (
        <FormWrapper title="The ask." FormComponent={<QuestionForm />}>
          This is some words of how it is supposed to work, including
          instructions of how to use it.
        </FormWrapper>
      ) : (
        <FormWrapper title="An answer." FormComponent={<QuestionResponse />}>
          This is the answer. Hopefully it&apos;s right.
        </FormWrapper>
      )}
      <FormWrapper title="An answer." FormComponent={<QuestionResponse />}>
        This is the answer. Hopefully it&apos;s right.
      </FormWrapper>
    </>
  )
}

export default QuestionPage
