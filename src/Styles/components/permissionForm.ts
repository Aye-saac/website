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

const buttonContainer: SxStyleProp = {
  columnCount: 2,
  columnGap: 4,
  maxWidth: ["12/12", "8/12", "6/12"],

  button: {
    minWidth: 0,
    width: "100%",
  },
}

const permissionForm: SxStyleProp = {
  container,
  title,
  description,
  buttonContainer,
}

export default permissionForm
