import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserProjects from "../pages/UserProjects.component";
import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <UserProjects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
