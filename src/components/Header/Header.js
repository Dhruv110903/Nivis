import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src="/blackbg.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="about"  offset={-100} >
            About
          </NavLink>
          <NavLink className="menu-item" to="services" offset={-130}>
            Services
          </NavLink>
          <NavLink className="menu-item" to="anouncement" offset={-120}>
            Anouncements
          </NavLink>
          <NavLink className="menu-item" to="downloads" offset={-100}>
            Downloads
          </NavLink>
          <NavLink className="menu-item" to="contact" offset={-25}>
            Contact
          </NavLink>

        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
