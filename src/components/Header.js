import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className='sticky-top navbar-expand-md navbar-light py-4 ' >
      <NavbarBrand className='ms-5' href='/'>
                {/* <img  src={Logo} alt='logo' width={100} height={100} /> */}
                <h1 className='d-inline align-middle text-white'> DYNOMITE GYMS</h1>
            </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar >
            <Nav className='ms-auto' navbar>
              <NavItem>
                  <NavLink  className='nav-link text-white' to='/'>
                    Home
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className='nav-link text-white' to='/locations-directory'>
                    Locations
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className='nav-link text-white' to='/about'>
                    About
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className='nav-link text-white' to='/contact'>
                    Contact
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className='nav-link' to='/sign-up'>
                  <Button id='navSignUp'>Sign Up</Button>{' '}

                  </NavLink>
              </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
  )
}

export default Header;