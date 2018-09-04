import React from "react";
import Oxygen from "react-oxygen-ui-kit";

const { Container } = Oxygen.default;
const linkStyle = {
  textDecoration: "none",
  color: "#2E3A46"
};

const Footer = props => (
  <center>
    <Container
      style={{
        position: "absolute",
        padding: 10,
        bottom: 0
      }}
    >
      &copy; 2018 dreamsaver
      <br />
      <a href="http://twitter.com/" style={linkStyle}>
        <i class="flaticon-twitter-logo-on-black-background" />
      </a>
      <a href="http://instagram.com" style={linkStyle}>
        <i class="flaticon-instagram-social-network-logo-of-photo-camera" />
      </a>
    </Container>
  </center>
);

export default Footer;
