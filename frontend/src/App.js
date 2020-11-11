import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import NavBarComponent from "./components/NavBarComponent";
import HomeScreen from "./screens/HomeScreen";
import ActivitiesScreen from "./screens/ActivitiesScreen";
import GalleryScreen from "./screens/GalleryScreen";
import MembersScreen from "./screens/MembersScreen";
import ContactScreen from "./screens/ContactScreen";
import NewEventForm from "./components/NewEventForm";

const App = () => {
  return (
    <Router>
      <NewEventForm />
      <NavBarComponent />

      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/activities" component={ActivitiesScreen} />
        <Route path="/gallery" component={GalleryScreen} />
        <Route path="/members" component={MembersScreen} />
        <Route path="/contact" component={ContactScreen} />
      </Switch>
    </Router>
  );
};

export default App;
