import { SxStyleProp } from "theme-ui"

const container: SxStyleProp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  borderRadius: "0.75rem",
  backgroundColor: "starWhite",

  lineHeight: 1,

  padding: 1,

  mt: 2,

  boxShadow: "0 21px 26px 1px #151723",

  img: {
    borderRadius: "0.5rem",
    width: "100%",
  },
}

const image: SxStyleProp = {
  container,
}

export default image
