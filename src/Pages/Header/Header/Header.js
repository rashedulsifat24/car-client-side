import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import useFirebase from "./../../../Hooks/useFirebase";

const Header = () => {
  const { user, logOut, singInwithGoogle } = useFirebase();
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container className="header-style">
          <Navbar.Brand as={Link} to="/home" className="">
            <img
              className="w-sm-50 w-lg-50"
              src="https://i.ibb.co/zxYQmTj/logo.webp"
              alt=""
            />
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Browse all Cars
            </Nav.Link>

            {user?.email ? (
              <Nav.Link as={Link} to="/dashbord">
                Dashbord
              </Nav.Link>
            ) : (
              ""
            )}

            {/* <Nav.Link as={Link} to="/myorder">
              My Order
            </Nav.Link> */}
            {/* {user?.email ? (
              <Nav.Link as={Link} to="/allorder">
                All Order manage
              </Nav.Link>
            ) : (
              ""
            )} */}
            {user?.email ? (
              <Button onClick={logOut} variant="link">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                <Button onClick={singInwithGoogle} variant="link">
                  Login
                </Button>
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
