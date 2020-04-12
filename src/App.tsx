import React from "react"

import Introduction from "Pages/Introduction"
import Permissions from "Pages/Permissions"
import Question from "Pages/Question"
import Response from "Pages/Response"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Introduction} exact />
        <Route path="/permissions" component={Permissions} />
        <Route path="/question" component={Question} />
        <Route path="/response" component={Response} />
      </Switch>
    </Router>
  )
}

export default App
