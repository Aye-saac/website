import React from "react"

import { Navbar } from "Components/Navbar"

import { BrowserRouter, Route, Switch } from "react-router-dom"

import { About } from "./pages/About"
import { Home } from "./pages/Home"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className="container">
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App
