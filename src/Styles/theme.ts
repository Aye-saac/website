import { buttons, layout, styles, text } from "./components"
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

export default {
  colors: {
    black: "#000000",

    underBase: "#1E202C",
    groundBase: "#222431",

    moonBase: "#41445D",
    starBase: "#63688e",

    dullWhite: "#b6b7bb",
    starWhite: "#C5C7D4",

    smokeWhite: "#e7ebff",
    nearWhite: "#f4f4f4",

    white: "#ffffff",

    // States
    error: "#da677c", // AA with groundBase/underBase
    onError: "#222431", // base
  },

  styles: {
    ...styles,
    ...layout,
  },

  // Variables: Tailwind
  breakpoints,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  space,
  zIndices,
  sizes,

  // Variables: Own set
  fonts,

  // Components
  buttons,

  text,
}
