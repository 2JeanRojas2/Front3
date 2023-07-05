import React from "react";
import Guauguaus from "./Components/Perro";
import Miaumiaus from "./Components/Gato";
import Home from "./Components/Home";
import { Router, Route, browserHistory } from "react-router-3";

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/miaumiaus" component={Miaumiaus} />
          <Route path="/guauguaus" component={Guauguaus} />
        </Route>
      </Router>
    );
  }
}
export default App;
