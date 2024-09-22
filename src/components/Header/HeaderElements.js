import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  // background-color: #7045f0;
  // background-color: #496148;
  background-color: #000000;
  width:100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0%;
  right: 0%;
  padding-right:60px;
  padding-left:60px;
`;

export const NavLink = styled(ScrollLink)`
  color: #FFFFFF;
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #0000FF;
  }
`;
export const Logo = styled('div')`
  img {
    width: 190px;
    height: 87px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #FFFFFF;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
