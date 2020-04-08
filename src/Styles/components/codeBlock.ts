import { SxStyleProp } from "theme-ui"

const container: SxStyleProp = {
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

const code: SxStyleProp = {
  transition: "0.35s height ease-in-out",
  willChange: "height",

  height: "200px",
  width: "100%",

  pre: {
    overflow: "hidden",
  },

  "&.open": {
    height: "1000px",

    pre: {
      overflow: "scroll",
    },
  },
}

const iconContainer: SxStyleProp = {
  svg: {
    width: "2em",
    height: "2em",
    stroke: "starWhite",

    transition: "0.15s transform ease",
    willChange: "transform",
  },

  "&.open": {
    svg: {
      transform: "rotate(90deg)",
    },
  },
}

const codeBlock: SxStyleProp = {
  container,
  content,
  overlay,
  iconContainer,
  code,
}

export default codeBlock
