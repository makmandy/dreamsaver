import React from "react";
import Oxygen from "react-oxygen-ui-kit";
import SimpleSlider from "./PhotoCarousel";

const { Container, Well } = Oxygen.default;

const Home = props => (
  <Container>
    <Well large="true">
      <SimpleSlider />
    </Well>
  </Container>
);

export default Home;
