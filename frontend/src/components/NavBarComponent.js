import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import LoginButton from "../components/LoginButton";
import Logo from "../assets/C.ico";
import { userLogout } from "../actions/userActions";
import { withRouter } from "react-router-dom";

const NavBarComponent = ({ history }) => {
  const [logout, setLogout] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      setLogout(true);
    }
  }, [userInfo, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    history.push("/");
    window.location.reload(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      className="align-content-center"
    >
      <div className="container" style={{ maxWidth: 2000 }}>
        <Navbar.Brand href="/">
          <img src={Logo} width="110px" alt="pam logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/activities">Activities</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/members">Members</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>

            {logout ? (
              <Button onClick={handleSubmit}>Logout</Button>
            ) : (
              <LoginButton />
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default withRouter(NavBarComponent);
