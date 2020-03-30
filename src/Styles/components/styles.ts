import { SxStyleProp } from "theme-ui"

const bodyBase = {
  fontFamily: "body",
  lineHeight: "body",
  fontWeight: "body",
}

const headingBase = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
  color: "nearWhite",
}

const root = {
  ...bodyBase,
  backgroundColor: "groundBase",
  color: "starWhite",
  fontSize: 2,
  lineHeight: "relaxed",
}

const a = {
  textDecoration: "none",
}

const h1 = {
  ...headingBase,
  m: 0,
  mb: 1,
  fontSize: 6,
  mt: 2,

  color: "starWhite",
}

const h2 = {
  ...headingBase,
  m: 0,
  mb: 1,
  fontSize: 5,
  mt: 2,
}

const h3 = {
  ...headingBase,
  m: 0,
  mb: 1,
  fontSize: 4,
  mt: 3,
}

const h4 = {
  ...headingBase,
  m: 0,
  mb: 1,
  fontSize: 3,
}

const h5 = {
  ...headingBase,
  m: 0,
  mb: 1,
  fontSize: 2,
}

const h6 = {
  ...headingBase,
  m: 0,
  mb: 2,
  fontSize: 1,
}

const styles: SxStyleProp = {
  root,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

export default styles
