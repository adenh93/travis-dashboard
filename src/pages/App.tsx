import * as React from "react";
import { Route, HashRouter as Router, Switch, Link } from "react-router-dom";

import { HelloOne, HelloTwo } from "../components";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/Two">Two</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={HelloOne} />
            <Route exact path="/Two" component={HelloTwo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
