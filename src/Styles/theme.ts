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
import { colors, fonts } from "./variables"

export default {
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
  colors,

  // Components

  layout,

  buttons,

  text,
}
