import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="*">
                    <div>
                      hello
                    </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
