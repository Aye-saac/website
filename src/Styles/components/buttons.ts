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
  fontSize: 3,

  "&:hover": {
    bg: "smokeWhite",
  },

  ">svg": {
    height: "1.3em",
    width: "1.3em",
  },
}

const button: SxStyleProp = {
  primary,
}

export default button
