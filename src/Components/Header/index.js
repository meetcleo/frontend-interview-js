import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./Header.css";

const Header = ({ title = "" }) => (
  <header id="cleo-app-header">
    <Logo title="Cleo" />
    <p>{title}</p>
  </header>
);

export default Header;
