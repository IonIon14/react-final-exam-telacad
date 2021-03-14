import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-navbar sticky-top bg-dark">
      <Navbar expand="lg">
        <Navbar.Brand href="#home" className="text-white">
          Final Exam
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="text-white">
              <Link to="/" className="text-white">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="/people" className="text-white">
              <Link to="/people" className="text-white">
                Angajati
              </Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="success " lg>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
