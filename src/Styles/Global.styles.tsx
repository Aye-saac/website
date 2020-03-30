import React from "react"

import { css, Global } from "@emotion/core"

const GlobalCSS = css`
  body {
    margin: 0;
    padding: 0;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    scroll-behavior: smooth;
    font-kerning: normal;
    font-variant-ligatures: contextual common-ligatures;

    font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
    font-synthesis: none;
  }

  a {
    text-decoration: none;
  }
`

const GlobalStyle: React.FC = () => <Global styles={GlobalCSS} />

export default GlobalStyle
