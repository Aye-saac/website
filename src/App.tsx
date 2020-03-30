import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Permission from "./pages/Permission"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Permission} exact />
      </Switch>
    </Router>
  )
}

export default App
