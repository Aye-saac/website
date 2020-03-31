import { SxStyleProp } from "theme-ui"

const section: SxStyleProp = {
  maxWidth: "5xl",
  margin: "0 auto",
  my: 5,
}

const container: SxStyleProp = {
  px: 4,
}

const content: SxStyleProp = {
  maxWidth: ["12/12", "8/12", "7/12"],
}

const layout: SxStyleProp = {
  container,
  section,
  content,
}

export default layout
