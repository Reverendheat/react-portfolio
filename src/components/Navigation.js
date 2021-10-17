import React, {useContext} from 'react'
import { Auth } from 'aws-amplify';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { UserContext } from '../Context/User';

const Navigation = () => {
  const {user, setUser} = useContext(UserContext)

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch(e) {
      console.log(e);
    }
    setUser(null);
  }

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
      {user ? <Nav.Link href=''>
        Log Out
      </Nav.Link> : <Nav.Link href='#login'>
        Log In
      </Nav.Link> }

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation
