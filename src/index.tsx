import "./index.css"

import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"

import { ThemeProvider } from "theme-ui"

import { store } from "Store"
import theme from "Styles"

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.querySelector("#root"),
)
