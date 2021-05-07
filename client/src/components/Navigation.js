import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../images/DentalWerk.png';

const Navigation = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} alt="dental werk logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="/job-search">Job Search</NavDropdown.Item>
            <NavDropdown.Item href="/clinic-search">
              Clinic Search
            </NavDropdown.Item>
            <NavDropdown.Item href="/saved-jobs">Saved Jobs</NavDropdown.Item>
            <NavDropdown.Item href="/address-book">
              Address Book
            </NavDropdown.Item>
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
