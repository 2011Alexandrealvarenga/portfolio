import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../assets/css/obj-profissional.css';

export default function AppObjProfissional(){
  return(
    <section class="obj-profissional" id="objetivo-profissional">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className='jusfity-content-md-center'>          
              <div className="objetivo-profissional">
                <h2>Objetivo Profissional</h2>
                <h4 >Analista Full Stack WordPress/PHP Pleno</h4>          
                <p>Olá, meu nome é Alexandre, tenho 37 anos (10/1985), moro em São Paulo, 
                falo inglês, venho trabalhando com desenvolvimento web Fevevereiro/2020, com foco maior em back-end do Wordpress e PHP, conheço front-end tambem.
                </p> 
                
                
                <div class="content-contact">
                  <div class="item">
                    <a href="https://github.com/2011Alexandrealvarenga" alt="ir para git hub" title="git hub" target="_blank"><i class="fa fa-github"></i>
                      <span>Github</span>
                    </a>
                  </div>
                  <div class="item">
                    <a href="https://www.linkedin.com/in/alexandre-bruno-alvarenga-88959b103/" alt="ir para linkedin" title="linkedin" target="_blank">
                      <i class="fa fa-linkedin"></i>
                      <span>Linkedin</span>
                    </a>            
                  </div>
                  <div class="item">
                    <a href="assets/docs/CV - Alexandre Alvarenga - portugues.pdf" alt="ir para curriculum" title="curriculum" target="_blank">
                      <i class="fa fa-file"></i>
                      <span>CV - Português</span>
                    </a>
                  </div>
                  <div class="item">
                    <a href="assets/docs/CV - Alexandre Alvarenga - English.pdf" alt="ir para curriculum" title="curriculum" target="_blank">
                      <i class="fa fa-file"></i>
                      <span>CV - English</span>
                    </a>
                  </div>

                </div>
               
              </div>          
          </Col>
        </Row>
      </Container>
    </section>
  )
}