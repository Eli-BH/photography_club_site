import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">P.A.M.</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Activities</Nav.Link>
          <Nav.Link href="#features">Gallery</Nav.Link>
          <Nav.Link href="#pricing">Members</Nav.Link>
          <Nav.Link href="#pricing">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
