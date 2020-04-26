import { SxStyleProp } from "theme-ui"

const primary: SxStyleProp = {
  color: "groundBase",
  bg: "smokeWhite",

  borderRadius: "xxxl",

  py: 3,
  px: "1.5rem",

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
  lineHeight: "1",

  outline: "none",

  "&:hover": {
    bg: "smokeWhite",
  },

  ">svg": {
    stroke: "groundBase",
    height: "1.1em",
    width: "1.1em",
  },
}

const outline: SxStyleProp = {
  ...primary,

  minWidth: ["100%"],

  fontSize: 1,
  fontWeight: 400,
  lineHeight: "tight",

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
  backgroundColor: "smokeWhite",
  color: "groundBase",
  borderColor: "none",

  fontWeight: 500,

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

const outlineRecording: SxStyleProp = {
  ...outline,

  borderColor: "groundBase",

  backgroundColor: "error",

  color: "groundBase",

  "&:hover": {
    boxShadow: "0 21px 26px -5px #151723",
  },

  svg: {
    stroke: "groundBase",
  },
}

const outlineDisabled: SxStyleProp = {
  ...outline,

  cursor: "default",

  color: "starBase",

  svg: {
    stroke: "starBase",
  },

  "&:hover": {},
}

const button: SxStyleProp = {
  primary,
  input,
  outline,
  outlineSelected,
  // outlineInteraction,
  outlineRecording,
  outlineDisabled,
}

export default button
