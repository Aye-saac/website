import { SxStyleProp } from "theme-ui"

const primary: SxStyleProp = {
  color: "onPrimary",
  bg: "primary",

  borderRadius: "lg",

  py: 3,
  px: 4,

  minWidth: "sm",
  width: "fit-content",

  display: "flex",
  justifyContent: "space-between",

  textAlign: "left",

  cursor: "pointer",

  transition: "0.15s ease background",

  "&:hover": {
    bg: "primaryVariant",
  },
}

const button: SxStyleProp = {
  primary,
}

export default button
