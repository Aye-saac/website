import { SxStyleProp } from "theme-ui"

const projectName: SxStyleProp = {
  color: "starWhite",
  fontWeight: 800,
  fontSize: [5, 6, 6],
  mb: 1,
}

const projectSummary: SxStyleProp = {
  color: "nearWhite",
  fontWeight: 800,
  fontSize: [6, 7, 7],
  lineHeight: "squeezed",
  maxWidth: ["12/12", "10/12", "10/12"],
  mb: 4,
}

const primary: SxStyleProp = {
  mb: 4,
  maxWidth: ["12/12", "8/12", "7/12"],
}

const text: SxStyleProp = {
  primary,
  heading: {
    projectName,
    projectSummary,
  },
}

export default text
