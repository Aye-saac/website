import React from "react"

import { Box, Button, ButtonProps } from "theme-ui"

import { IconType } from "react-icons"

interface Props extends ButtonProps {
  children: React.ReactNode
  IconComponent?: IconType
}

const NoIcon: React.FC = () => <Box sx={{ width: "1em", height: "1em" }} />

const ButtonView: React.FC<Props> = ({ children, IconComponent, ...props }) => {
  return (
    <>
      <Button variant="primary" {...props}>
        {children}
        {IconComponent ? <IconComponent /> : <NoIcon />}
      </Button>
    </>
  )
}

export default ButtonView
