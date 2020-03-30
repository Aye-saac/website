import React from "react"

import Introduction from "Pages/Introduction"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Introduction} exact />
      </Switch>
    </Router>
  )
}

export default App
