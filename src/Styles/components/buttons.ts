import { SxStyleProp } from "theme-ui"

const primary: SxStyleProp = {
  color: "groundBase",
  bg: "starWhite",

  borderRadius: "lg",

  py: 3,
  px: 4,

  minWidth: ["100%", "sm", "sm"],
  width: "fit-content",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  textAlign: "left",

  cursor: "pointer",

  transitionDuration: "150ms",
  transitionTimingFunction: "ease",
  transitionProperty: "background border color",

  fontWeight: 500,
  fontSize: 2,

  outline: "none",

  "&:hover": {
    bg: "smokeWhite",
  },

  ">svg": {
    stroke: "groundBase",
    height: "1.3em",
    width: "1.3em",
  },
}

const outline: SxStyleProp = {
  ...primary,

  boxShadow: "none",

  backgroundColor: "underBase",
  color: "starWhite",

  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "moonBase",

  "&:hover": {
    borderColor: "starBase",
    backgroundColor: "groundBase",
  },

  svg: {
    stroke: "starWhite",
  },
}

const outlineSelected: SxStyleProp = {
  ...outline,
  backgroundColor: "starWhite",
  color: "groundBase",
  borderColor: "none",

  "&:hover": {
    backgroundColor: "smokeWhite",
  },

  svg: {
    stroke: "groundBase",
  },
}

const input: SxStyleProp = {
  ...primary,
}

const outlineInteraction: SxStyleProp = {
  ...outline,

  fontSize: 1,
  letterSpacing: "wide",

  px: 3,
  py: "0.9rem",

  borderRadius: "xxxl",
}

const outlineRecording: SxStyleProp = {
  ...outlineInteraction,

  borderColor: "groundBase",

  backgroundColor: "error",

  color: "groundBase",

  "&:hover": {
    boxShadow: "0 21px 26px 1px #151723",
  },

  svg: {
    stroke: "groundBase",
  },
}

const button: SxStyleProp = {
  primary,
  input,
  outline,
  outlineSelected,
  outlineInteraction,
  outlineRecording,
}

export default button
