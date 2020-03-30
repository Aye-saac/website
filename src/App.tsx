import React from "react"

import Introduction from "Pages/Introduction"
import Permissions from "Pages/Permissions"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Introduction} exact />
        <Route path="/permissions" component={Permissions} />
      </Switch>
    </Router>
  )
}

export default App
