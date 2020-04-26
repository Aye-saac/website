import { SxStyleProp } from "theme-ui"

const container: SxStyleProp = {
  height: "100%",

  backgroundColor: "underBase",
  borderColor: "starBase",
  borderWidth: "2px",
  borderStyle: "solid",
  borderRadius: "xxl",

  my: 4,

  fontSize: 1,
  fontWeight: 400,
  color: "starWhite",
  position: "relative",
}

const content: SxStyleProp = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  p: 3,
  paddingBottom: 0,

  pre: {
    margin: 0,
    p: 0,
    px: 4,
    pb: 3,
    lineHeight: "normal",
    height: "inherit",
  },
}

const overlay: SxStyleProp = {
  width: "100%",
  height: "100%",
  borderRadius: "xxl",

  backgroundImage: "linear-gradient(180deg, rgba(30,32,44,0) 0%, #1E202C 92%)",
  position: "absolute",
}

const overlayText: SxStyleProp = {
  position: "absolute",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: 2,

  cursor: "default",

  textTransform: "uppercase",
  fontWeight: 600,
  letterSpacing: "widest",
  color: "starBase",
  zIndex: 100,
}

const iconContainer: SxStyleProp = {
  stroke: "starWhite",
}

const codeBlock: SxStyleProp = {
  container,
  content,
  overlay,
  overlayText,
  iconContainer,
}

export default codeBlock
