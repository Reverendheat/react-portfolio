import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


const Navigation = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed='top'>
          <Container>
          <Navbar.Brand>Brandon (Sharp)</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#home">Home</Nav.Link>
              <Nav.Link href="/#about">About</Nav.Link>
              <Nav.Link href="/#experience">Experience</Nav.Link>
              <Nav.Link href="/#skills">Skills</Nav.Link>
              <Nav.Link href="/#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Extras" id="basic-nav-dropdown">
                <NavDropdown.Item href="/drunkardswalk">Drunkards Walk</NavDropdown.Item>  
              </NavDropdown> 
            </Nav>
          </Navbar.Collapse>
          </Container>
    </Navbar>
  )
}

export default Navigation
