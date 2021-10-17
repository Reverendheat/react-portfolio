import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
  <Container>
  <Navbar.Brand>Brandon Sharp</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link>
        Log In
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation
