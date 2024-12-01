import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import ImgEuaFlag from '../../assets/img/eua.png';
import ImgBrFlag from '../../assets/img/brasil.png';
import { Row } from 'react-bootstrap';
import '../../assets/css/menu.css';


export default function AppHeader(){
  return (
    <>
    <section className='header'>
      <div className="justify-content-md-center">
        <div class="language">
          <div class="ir-eua btn-eng-cont">
            <Image src={ImgEuaFlag}/>
          </div>
          <div class="ir-brasil btn-prt-cont">
            <Image src={ImgBrFlag}/>
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="justify-content-md-center">
          <Row>
            <div className="hide-mobile justify-content-md-between">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Brand href="#home" className='item-menu'>Menu</Navbar.Brand>            
            </div>          
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">SOBRE MIM</Nav.Link>
                <Nav.Link href="#objetivo-profissional">OBJETIVO PROFISSIONAL</Nav.Link>
                <Nav.Link href="#escolaridade">ESCOLARIDADE</Nav.Link>
                <Nav.Link href="#experiencia">EXPERIÊNCIAS</Nav.Link>
                <Nav.Link href="#trabalho">TRABALHOS</Nav.Link>
                <Nav.Link href="#curso">CURSOS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    </section>
    </>
  )
}