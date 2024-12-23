import { Col, Container, Row } from "react-bootstrap";
import '../../assets/css/sobre.css';

export default function AppSobre(){
  return(
    <>
      <section id="sobre" className="sobre">
        <Container>
          <Row>
            <Col md={6} xs={12} className='jusfity-content-md-center '>  
              <div className="content">
                <div className="content-img">
                </div>
              </div>
            </Col>
            <Col md={6} xs={12} className='jusfity-content-md-center'>  
              <div className="content-desc">
                  <h2 className="title">Alexandre Bruno F. de Alvarenga</h2>
                  <ul class="prt-cont">
                    <li><span> 39 Anos (10/1985)</span></li>
                    <li><span> São Paulo - SP</span></li>
                    <li><span> 2011brunofernandes@gmail.com</span></li>
                    <li><span> 55 11 97957-3056</span></li>
                  </ul>   
              </div>
            </Col>
          </Row>
        </Container>
      </section>
            
    </>
  )
}