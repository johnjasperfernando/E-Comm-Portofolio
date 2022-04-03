import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { auth } from "../FireBase/FireBase.utill";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() =>auth.signOut()}>SIGN OUT</div>
      ) : (
        <Link className="option" to="/singin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
