import { layout } from "./components"
import { sizes } from "./lib/tailwind"

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
    "&:hover": {
      bg: "primaryVariant",
    },
  },
}

export default {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  colors: {
    background: "#121212",
    surface: "#121212",

    // Theme
    primary: "#f2c9a2",
    primaryVariant: "#d0ad8b",
    secondary: "#a0c8ef",

    // States
    error: "#cf6679",

    // "On" colours
    onPrimary: "#000000",
    onSecondary: "#000000",
    onBackground: "#ffffff",
    onSurface: "#ffffff",
    onError: "#000000",
  },

  sizes,

  styles: {
    root: {
      fontFamily: "body",
      // lineHeight: "body",
      // fontWeight: "body",
      backgroundColor: "background",
      color: "onBackground",
    },
    ...layout,
  },

  buttons,
}
