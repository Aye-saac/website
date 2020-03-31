import { SxStyleProp } from "theme-ui"

const container: SxStyleProp = {
  my: 6,
}

const title: SxStyleProp = {
  variant: "text.heading.h3",
}

const description: SxStyleProp = {
  variant: "text.primary",
  maxWidth: ["11/12", "8/12", "6/12"],
}

const buttonWrapper: SxStyleProp = {
  // todo: Flex or column or grid?
}

const permissionRequest: SxStyleProp = {
  container,
  title,
  description,
  buttonWrapper,
}

export default permissionRequest
