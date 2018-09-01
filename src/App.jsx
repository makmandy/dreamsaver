import React, { Component } from "react";
import Oxygen from "react-oxygen-ui-kit";
import { Switch, Route } from "react-router-dom";
import { About, Contact, Footer, Home, Navbar, Shop } from "./components";

const { Background, Headline } = Oxygen.default;
const linkStyle = {
  textDecoration: "none",
  color: "#2E3A46"
};

class App extends Component {
  render() {
    return (
      <Background color1="#7A56A0" color2="#5EAAB5">
        <Headline inverted="true">
          <a href="/" style={linkStyle}>
            dreamsaver
          </a>
        </Headline>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Background>
    );
  }
}

export default App;
