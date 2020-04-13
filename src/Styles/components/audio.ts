import { SxStyleProp } from "theme-ui"

const wrapper: SxStyleProp = {
  maxWidth: ["12/12", "10/12", "9/12"],
  my: 4,
}

const container: SxStyleProp = {
  backgroundColor: "underBase",
  width: "100%",
  color: "starWhite",
  fontSize: 2,
  borderRadius: "xxxl",

  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "moonBase",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  px: 3,
  py: "0.75rem",

  transitionDuration: "150ms",
  transitionTimingFunction: "ease",
  transitionProperty: "background border color",

  "&:hover": {
    borderColor: "starBase",
  },

  svg: {
    width: "1.3em",
    height: "1.3em",
    stroke: "starWhite",
  },
}

const timelineContainer: SxStyleProp = {
  flexGrow: 1,
  width: "100%",

  backgroundColor: "moonBase",

  height: "4px",
  borderRadius: "full",

  ml: 3,
  mr: 2,

  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",

  mask: "linear-gradient(#000, #fff)",
}

const timelineBase: SxStyleProp = {
  height: "inherit",
  borderRadius: "inherit",

  backgroundColor: "inherit",

  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "100%",
}

const timelineElapsed: SxStyleProp = {
  height: "inherit",
  borderRadius: "inherit",
  borderTopRightRadius: "0",
  borderBottomRightRadius: "0",

  backgroundColor: "starWhite",

  transition: "0.5s ease all",

  flexGrow: 1,
  flexShrink: 0,
  flexBasis: "20px",
}

const audio: SxStyleProp = {
  wrapper,
  container,
  timeline: {
    container: timelineContainer,
    base: timelineBase,
    elapsed: timelineElapsed,
  },
}

export default audio
