import React from "react";
import { Link } from "react-router-dom";
import Oxygen from "react-oxygen-ui-kit";

const { Menu, MenuItem } = Oxygen.default;
const linkStyle = {
  textDecoration: "none",
  color: "#3F4F5F"
};

const Navbar = props => (
  <Menu small="true">
    <MenuItem button="true">
      <Link to="/" style={linkStyle}>
        home
      </Link>
    </MenuItem>
    <MenuItem button="true">
      <Link to="/about" style={linkStyle}>
        about
      </Link>
    </MenuItem>
    <MenuItem button="true">
      <Link to="/shop" style={linkStyle}>
        shop
      </Link>
    </MenuItem>
    <MenuItem button="true">
      <Link to="/contact" style={linkStyle}>
        contact
      </Link>
    </MenuItem>
  </Menu>
);

export default Navbar;
