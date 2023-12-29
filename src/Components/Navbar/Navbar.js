import React, { useState } from "react";
import styled from "styled-components";
import Login from "../LoginPage/Login";
import Signup from "../SignupPage/Signup";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const toggleLoginModal = () => {
    setLoginModalOpen((prevState) => !prevState);
  };

  const toggleSignupModal = () => {
    setSignupModalOpen((prevState) => !prevState);
  };

  return (
    <NavbarContainer>
      <Container>
        <Logo>Logo</Logo>
        <NavList open={isMobileMenuOpen}>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggleLoginModal}>Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={toggleSignupModal}>Signup</NavLink>
          </NavItem>
        </NavList>
        <BurgerMenu onClick={toggleMobileMenu}>&#9776;</BurgerMenu>
      </Container>
      <Modal open={isLoginModalOpen}>
        <Login onClose={toggleLoginModal} />
      </Modal>
      <Modal open={isSignupModalOpen}>
        <Signup onClose={toggleSignupModal} />
      </Modal>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background-color: #d2b48c;
  color: #fff;
  padding: 10px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: -1px;
  }
`;

const Logo = styled.div`
  font-size: 1.5em;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: "Roboto", sans-serif;

  &:hover {
    color: #c0a080;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 51px;
    left: 0;
    background-color: #d2b48c;
    text-align: center;
    width: 100%;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  margin-top: 0;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: "Roboto", sans-serif;

  &:hover {
    color: #c0a080;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const BurgerMenu = styled.nav`
  font-size: 1.5em;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Modal = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export default Navbar;
