import { SxStyleProp } from "theme-ui"

const inputWrapper: SxStyleProp = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",

  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "moonBase",

  borderRadius: "xxxl",
  backgroundColor: "underBase",

  transition: "0.15s ease all",

  px: 3,

  maxWidth: ["100%", "10/12", "9/12"],

  my: 4,

  svg: {
    stroke: "starWhite",
    width: "1.3em",
    height: "1.3em",
  },
}

const input = {
  border: "none",
  color: "starWhite",
  fontWeight: 500,
  fontSize: 3,

  pl: 3,

  "&:focus": {
    outline: "none",
  },

  "&::placeholder": {
    color: "starBase",
  },
}

const forms: SxStyleProp = {
  inputWrapper,
  input,
}

export default forms
