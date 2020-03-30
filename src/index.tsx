import "./index.css"

import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"

import { store } from "Store"

import { Normalize } from "styled-normalize"

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Normalize />
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root"),
)
