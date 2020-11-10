import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import NavBarComponent from "./components/NavBarComponent";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <NavBarComponent />
      <Switch>
        <Route path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
};

export default App;
