import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from 'react-bootstrap';
import '../../assets/css/menu.css';

export default function AppHeader(){
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="justify-content-md-center">
        <Row>
          <div className="hide-mobile justify-content-md-between">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="#home" className='item-menu'>Menu</Navbar.Brand>            
          </div>          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  )
}