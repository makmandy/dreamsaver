import React from "react";
import Oxygen from "react-oxygen-ui-kit";

const { Button, Container, Input, Row, Well } = Oxygen.default;

const Contact = props => (
  <Container>
    <Well large="true">
    <div style={{
      fontSize: 20,
      fontWeight: 600
    }}>contact us</div>&nbsp;
      <Row>
        <Container>
          name <Input border="false" />
        </Container>
      </Row>
      &nbsp;
      <Row>
        <Container>
          email <Input border="false" />
        </Container>
      </Row>
      &nbsp;
      <Row>
        <Container>
          message <Input border="false" />
        </Container>
      </Row>
      &nbsp;
      <Row>
        <Button>send</Button>
      </Row>
    </Well>
  </Container>
);

export default Contact;
