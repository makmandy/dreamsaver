import React from "react";
import Oxygen from "react-oxygen-ui-kit";
import PhotoCarousel from "./PhotoCarousel";

const { Container, Well } = Oxygen.default;

const Home = props => (
  <Container>
    <Well large="true">
      <PhotoCarousel />
    </Well>
  </Container>
);

export default Home;
