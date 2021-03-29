import "normalize.css"

import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"

import { Styled, ThemeProvider } from "theme-ui"

import Introduction from "Pages/Introduction"
import { LivePage } from "Pages/Live/LivePage"
import Permissions from "Pages/Permissions"
import Question from "Pages/Question"
import { store } from "Store"
import theme, { GlobalStyle } from "Styles"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Styled.root>
          <Router>
            <Switch>
              <Route path="/" component={Introduction} exact />
              <Route path="/permissions" component={Permissions} />
              <Route path="/question" component={Question} />
              <Route path="/live" component={LivePage} />
            </Switch>
          </Router>
        </Styled.root>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.querySelector("#root"),
)
