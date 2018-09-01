import React from "react";
import { Link } from "react-router-dom";
import Oxygen from "react-oxygen-ui-kit";

const { Menu, MenuItem, MenuSeparator } = Oxygen.default;
const linkStyle = {
  textDecoration: "none",
  color: "#2c3e50"
};

const Navbar = props => (
  <Menu small="true">
    <MenuItem button="true">
      <Link to="/home" style={linkStyle}>
        home
      </Link>
    </MenuItem>
    <MenuSeparator />
    <MenuItem button="true">
      <Link to="/about" style={linkStyle}>
        about
      </Link>
    </MenuItem>
    <MenuSeparator />
    <MenuItem button="true">
      <Link to="/shop" style={linkStyle}>
        shop
      </Link>
    </MenuItem>
    <MenuSeparator />
    <MenuItem button="true">
      <Link to="/contact" style={linkStyle}>
        contact
      </Link>
    </MenuItem>
  </Menu>
);

export default Navbar;
