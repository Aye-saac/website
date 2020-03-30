import "normalize.css"

import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"

import { Styled, ThemeProvider } from "theme-ui"

import { store } from "Store"
import theme, { GlobalStyle } from "Styles"

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Styled.root>
          <App />
        </Styled.root>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.querySelector("#root"),
)
