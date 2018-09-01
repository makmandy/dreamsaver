import React from "react";
import Oxygen from "react-oxygen-ui-kit";

const { Container, Input, Row } = Oxygen.default;

const Contact = props => (
  <div>
    <Row>
      <Container>
        name <Input border="false" />
      </Container>
    </Row>
    <br />
    <Row>
      <Container>
        email <Input border="false" />
      </Container>
    </Row>
    <br />
    <Row>
      <Container>
        message <Input border="false" />
      </Container>
    </Row>
  </div>
);

export default Contact;
