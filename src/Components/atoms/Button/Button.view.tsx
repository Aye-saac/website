import React from "react"

import { Button, ButtonProps } from "theme-ui"

interface Props extends ButtonProps {
  children: React.ReactNode
}

const ButtonView: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <Button variant="primary" {...props}>
        {children}
      </Button>
    </>
  )
}

export default ButtonView
