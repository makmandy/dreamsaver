import React, { Component } from "react";
import Oxygen from "react-oxygen-ui-kit";
import { Switch, Route } from "react-router-dom";
import { Contact, Navbar } from "./components";

const { Background, Headline } = Oxygen.default;

class App extends Component {
  render() {
    return (
      <div>
        <Background>
          <Headline inverted="true">dreamsaver</Headline>
          <Navbar />
          <Switch>
            <Route exact path="/about" />
            <Route path="/shop" />
            <Route path="/gallery" />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Background>
      </div>
    );
  }
}

export default App;
