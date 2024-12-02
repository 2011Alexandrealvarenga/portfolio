import { Col, Container, Row } from "react-bootstrap";
import '../../assets/css/escolaridade.css';

export default function AppEscolaridade(){
  return(
    <section id="escolaridade">
      <Container>
        <Row>

          <Col md={{ span: 6, offset: 3 }} className='jusfity-content-md-center'>  
            <div className="content">
              <h2 className="title d-flex justify-content-center">Escolaridade</h2><br />
              <div className="item">
                <h3 className="sub-title">Graduação</h3>
                <span>Universidade - Uninove</span><br />
                <span>Concluido - Dezembro/2015</span>
              </div>
              <div className="item">
                <h3 className="sub-title">Inglês</h3>
                <span>Estudei durante 4 anos e tenho experiência falando inglês</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}