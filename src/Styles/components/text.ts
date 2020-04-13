import { SxStyleProp } from "theme-ui"

const h2 = {
  fontWeight: 800,
  fontSize: [5, 6, 6],
  mb: 1,
  color: "nearWhite",
}

const h3 = {
  ...h2,
  color: "nearWhite",
  fontSize: [4, 5, 5],
}

const projectName: SxStyleProp = {
  ...h2,
  color: "starWhite",
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

const caption: SxStyleProp = {
  m: 0,
  mb: 1,
  fontSize: 1,
  lineHeight: "snug",
  fontWeight: "medium",
}

const text: SxStyleProp = {
  primary,
  caption,
  heading: {
    h2,
    h3,
    projectName,
    projectSummary,
  },
}

export default text
