import { Col, Container, Row } from "react-bootstrap";
import '../../assets/css/trabalhos.css';
import Image from 'react-bootstrap/Image';

const trabalhosData = [
  {
    id: '1',
    link: 'https://www.tokiomarine.com.br/',
    trabalho: 'Tokio Marine',
    img: require('../../assets/img/tokiomarine.PNG'),
    tecnologias: ['HTML','CSS','Javascript','Jquery','Wordpress','PHP','SASS','Gulp','Xampp','Minificação','SEO', 'Site Rápido','My Sql','Bootstrap 4','Git Lab','Git']
  },
  {
    id: '2',
    link: 'https://blog.tokiomarine.com.br/',
    trabalho: 'Blog Tokio Marine',
    img: require('../../assets/img/blog-tokiomarine.png'),
    tecnologias: (['HTML','CSS','Javascript','Jquery','Wordpress','PHP','Xampp','SEO', 'Site Rápido','My Sql','Bootstrap 4','Git Lab','Git'])
  },
  {
    id: '3',
    link: 'https://boraviver.space/',
    trabalho: 'Blog Tokio Marine',
    img: require('../../assets/img/boraviver.jpg'),
    tecnologias: (['Freelance','HTML','CSS','Javascript','Jquery','Wordpress','PHP','Xampp','SEO', 'Site Rápido','My Sql','Bootstrap 4','Git Lab','Git'])
  },
  {
    id: '4',
    link: 'https://diverbrink.com.br/',
    trabalho: 'Diverbrink',
    img: require('../../assets/img/diverbrink.PNG'),
    tecnologias: (['Freelance','HTML','CSS','Javascript','Jquery','Wordpress','PHP','Xampp','SEO', 'Site Rápido','My Sql','Bootstrap 4','Git Lab','Git'])
  }
]
export default function AppTrabalhos(){
  return(
    <section id="trabalho" className="trabalhos">
      <Container>
        <Row>
          <Col>
            <h2 className="title">Trabalhos Realizados</h2>

            <div className="content">
              {
                trabalhosData.map(trabalho =>{
                  return(
                    <div className="item">
                        <Image src={trabalho.img} className="img-trabalho"/>
                        <h2 className="title">{trabalho.trabalho}</h2>
                        <div className="content-tecnologia">
                          {
                            trabalho.tecnologias.map((tecnologia, index)=>{
                              return(

                                <span key={index}>{tecnologia}</span>
                              )
                            }

                            )
                          }
                        </div>
                    </div>
                  )
                })
              }
              {/* <a href="">
                <div className="item">
                  <img src="https://2011alexandrealvarenga.github.io/Portfolio2/assets/img/tokiomarine.PNG" className="img-trabalho" alt="" />
                  <h2 className="title">Trabalhos</h2>
                  <span>wordpress</span>
                </div>
              </a>
              <a href="">
                <div className="item">
                  <img src="https://2011alexandrealvarenga.github.io/Portfolio2/assets/img/tokiomarine.PNG" className="img-trabalho" alt="" />
                  <h2 className="title">Trabalhos</h2>
                  <span>wordpress</span>
                </div>
              </a>
              <a href="">
                <div className="item">
                  <img src="https://2011alexandrealvarenga.github.io/Portfolio2/assets/img/tokiomarine.PNG" className="img-trabalho" alt="" />
                  <h2 className="title">Trabalhos</h2>
                  <span>wordpress</span>
                </div>
              </a>
              <a href="">
                <div className="item">
                  <img src="https://2011alexandrealvarenga.github.io/Portfolio2/assets/img/tokiomarine.PNG" className="img-trabalho" alt="" />
                  <h2 className="title">Trabalhos</h2>
                  <span>wordpress</span>
                </div>
              </a>
              <a href="">
                <div className="item">
                  <img src="https://2011alexandrealvarenga.github.io/Portfolio2/assets/img/tokiomarine.PNG" className="img-trabalho" alt="" />
                  <h2 className="title">Trabalhos</h2>
                  <span>wordpress</span>
                </div>
              </a>             */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}