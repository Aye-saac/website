import React from "react"

import { Text, TextProps } from "theme-ui"

type TextRef = React.Ref<HTMLDivElement>

const TextView = React.forwardRef((props: TextProps, forwardedRef: TextRef) => {
  // Destructure props and remove ref from other props
  const { children, variant, ref, ...otherProps } = props

  const DEFAULT_VARIANT = "primary"

  return (
    <Text
      ref={forwardedRef}
      // Use default is no variant is provided
      variant={variant || DEFAULT_VARIANT}
      {...otherProps}
    >
      {children}
    </Text>
  )
})

export default TextView
