import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import SingInAndSingUp from "../signInAndSingUp/SignInAndSingOut.Component";


const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shops">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <Link className="option" to="/singin">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
