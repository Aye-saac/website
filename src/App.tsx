import React from "react"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./pages/Home"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="container">
          <Route path="/" component={Home} exact />
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App
