import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.scss";
import NavBarComponent from "./components/NavBarComponent";
import HomeScreen from "./screens/HomeScreen";
import ActivitiesScreen from "./screens/ActivitiesScreen";
import GalleryScreen from "./screens/GalleryScreen";
import MembersScreen from "./screens/MembersScreen";
import ContactScreen from "./screens/ContactScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import CardEditForm from "./components/CardEditForm";

const App = () => {
  return (
    <Router>
      <NavBarComponent />

      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/activities" component={ActivitiesScreen} />
        <Route path="/gallery" component={GalleryScreen} />
        <Route path="/members" component={MembersScreen} />
        <Route path="/contact" component={ContactScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/edit" component={CardEditForm} />
      </Switch>
    </Router>
  );
};

export default App;
