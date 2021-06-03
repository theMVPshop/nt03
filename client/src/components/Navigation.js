import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../images/DentalWerk.png';
import clinic from '../images/GREEN-clinic-search.png';
import search from '../images/GREEN-search.png';
import '../css/Navigation.css';

const Navigation = () => {
  return (
    <Navbar className='navbar' expand='lg'>
      <Navbar.Brand href='/'>
        <img src={logo} alt='dental werk logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse className='nav-box' id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Link className='nav-link' to='/clinic-search'>
            <img src={clinic} alt='clinic search icon' />
          </Link>
          <Link className='nav-link' to='/job-search'>
            <img src={search} alt='job search icon' />
          </Link>
          <NavDropdown
            className='menu-button'
            title='Menu'
            id='basic-nav-dropdown'
          >
            <NavDropdown.Item href='/job-search'>Job Search</NavDropdown.Item>
            <NavDropdown.Item href='/clinic-search'>
              Clinic Search
            </NavDropdown.Item>
            <NavDropdown.Item href='/saved-jobs'>Saved Jobs</NavDropdown.Item>
            <NavDropdown.Item href='/address-book'>
              Address Book
            </NavDropdown.Item>
            <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='/'>Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
