import React from "react";
import Oxygen from "react-oxygen-ui-kit";

const { Button, Container, Input, Row, Well } = Oxygen.default;

const Contact = props => (
  <Well large="true">
    <Row>
      <Container>
        <h3>contact us</h3>
      </Container>
    </Row>
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
    <br />
    <Row>
      <Button>send</Button>
    </Row>
  </Well>
);

export default Contact;
