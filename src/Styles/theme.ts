import { layout } from "./components"
import {
  breakpoints,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  sizes,
  space,
  zIndices,
} from "./lib/tailwind"
import { fonts } from "./variables"

// const colors = {
//   coolGray: [
//     "#f5f7fa",
//     "#e4e7eb",
//     "#cbd2d9",
//     "#9aa5b1",
//     "#7b8794",
//     "#616e7c",
//     "#52606d",
//     "#3e4c59",
//     "#323f4b",
//     "#1f2933",
//   ],
// }

const buttons = {
  primary: {
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
  },
}

export default {
  fonts,

  colors: {
    // Theme
    primary: "#f2c9a2",
    primaryVariant: "#d0ad8b",
    secondary: "#a0c8ef",

    background: "#121212",
    surface: "#121212",

    // States
    error: "#cf6679",

    // "On" colours
    onPrimary: "#000000",
    onSecondary: "#000000",
    onBackground: "#ffffff",
    onSurface: "#ffffff",
    onError: "#000000",
  },

  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      backgroundColor: "background",
      color: "onBackground",

      fontSmoothing: "auto",
    },
    ...layout,
  },

  // Variables
  breakpoints,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  space,
  zIndices,
  sizes,

  // Components
  buttons,
}
