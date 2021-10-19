import React, {useContext} from 'react'
import { Auth } from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { UserContext } from '../Context/User';

import {Link} from 'react-router-dom';

const Navigation = () => {
  const {user, setUser} = useContext(UserContext)

  const handleSignOut = () => {
    Auth.signOut();
    setUser(null);
  }

  return (
<Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed='top'>
  <Container>
  <Navbar.Brand>Brandon (Sharp)</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#experience">Experience</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <Nav>
    {user ? <NavDropdown title={user.username} id="basic-nav-dropdown">
        <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>  
        <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
        </NavDropdown> 
        : <Nav.Link>
        <Link to='/login' style={{ textDecoration: 'none', color: 'white', }}>
          <div className='login-button' style={{color:'black'}}>Sign In</div>
        </Link>
      </Nav.Link> }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation
