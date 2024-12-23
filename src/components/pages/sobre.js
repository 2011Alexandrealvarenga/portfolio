import { Col, Container, Row } from "react-bootstrap";
import '../../assets/css/sobre.css';
import imgSobre from '../../assets/img/me.JPG';
import Image from 'react-bootstrap/Image';


export default function AppSobre(){
  return(
    <>
      <section id="sobre" className="sobre">
        <Container>
          {/* <Row>
            <Col className='jusfity-content-md-center border-image content-sobre'>
              <div className="content">
                <div className="content-img">
                </div>
              </div>
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
          </Row> */}
          <Row className="content-total">

            <Col md={6} xs={12} className='jusfity-content-md-center border-image'>  
              <div className="content">
                <div className="content-img">
                </div>
              </div>
            </Col>
            <Col md={6} xs={12} className='jusfity-content-md-center border-content'>  
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
            
      {/* <section className="about">
        <Container>
          <Row>
            <Col>            
              <div className="foto">
                <Image src={imgSobre} className="imagem-sobre" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem dolor laudantium enim possimus obcaecati tempora a nulla? Cupiditate vitae nam fugiat voluptatibus voluptate minus, aliquam veniam exercitationem dignissimos quo!
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  )
}