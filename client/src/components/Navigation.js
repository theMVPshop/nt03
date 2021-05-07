import React from 'react';
import Link from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../images/DentalWerk.png';

const Navigation = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="dental werk logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <a>
            <img src="" alt="" />
          </a>
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Job Search</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Clinic Search
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Saved Jobs</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Address Book</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
