import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "../components/Home/HomeContainer";
import CollectionContainer from "../components/Collection/CollectionContainer"

const App = () => {
  return (
<Router>
    <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/collection" exact component={CollectionContainer} />
    </Switch>
  </Router>
  )
}

export default App