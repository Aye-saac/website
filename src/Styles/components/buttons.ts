import { SxStyleProp } from "theme-ui"

const primary: SxStyleProp = {
  color: "groundBase",
  bg: "starWhite",

  borderRadius: "xxl",

  py: 3,
  px: 4,

  minWidth: ["100%", "sm", "sm"],
  width: "fit-content",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  textAlign: "left",

  cursor: "pointer",

  transition: "0.15s ease background",

  fontWeight: 500,
  fontSize: 2,

  "&:hover": {
    bg: "smokeWhite",
  },

  ">svg": {
    height: "1.3em",
    width: "1.3em",
  },
}

const input: SxStyleProp = {
  ...primary,
  borderRadius: "lg",

  boxShadow: "0 21px 26px 1px #151723",

  // bg: "smokeWhite",

  // "&:hover": {
  // bg: "nearWhite",
  // },
}

const button: SxStyleProp = {
  primary,
  input,
}

export default button
