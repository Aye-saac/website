import { layout } from "./components"

export default {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#333eee",
  },

  styles: {
    root: {
      fontFamily: "body",
      // lineHeight: "body",
      // fontWeight: "body",
    },
    ...layout,
  },
}
