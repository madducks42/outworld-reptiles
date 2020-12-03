import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "../components/Home/HomeContainer";

const App = () => {
  return (
<Router>
    <Switch>
      <Route path="/" exact component={HomeContainer} />
    </Switch>
  </Router>
  )
}

export default App