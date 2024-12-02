import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../../assets/css/tecnologia.css';

const CoursesData = [
   {
    id: 1,
    img: (require('../../assets/img/wordpress.svg').default),
    name: 'Wordpress'
  },  
  {
    id: 2,
    img: (require('../../assets/img/wordpress.svg').default),
    name: 'Plugins WP'
  },
  {
    id: 3,
    img: (require('../../assets/img/elementor.svg').default),
    name: 'Elementor WP'
  },
  {
    id: 4,
    img: (require('../../assets/img/php.svg').default),
    name: 'PHP'
  },
  {
    id: 5,
    img: (require('../../assets/img/javascript-icon.svg').default),
    name: 'Javascript'
  },
  {
    id: 6,
    img: (require('../../assets/img/mysql.svg').default),
    name: 'MySql'
  },
  {
    id: 7,
    img: (require('../../assets/img/git.svg').default),
    name: 'Git'
  },
  {
    id: 8,
    img: (require('../../assets/img/github.svg').default),
    name: 'GitHub'
  },
  {
    id: 9,
    img: (require('../../assets/img/gitlab.svg').default),
    name: 'GitLab'
  },
  {
    id: 10,
    img: (require('../../assets/img/seo.svg').default),
    name: 'SEO'
  },
  {
    id: 11,
    img: (require('../../assets/img/semrush.svg').default),
    name: 'Semrush'
  },
  {
    id: 12,
    img: (require('../../assets/img/html.svg').default),
    name: 'HTML'
  },
  {
    id: 13,
    img: (require('../../assets/img/css.svg').default),
    name: 'CSS'
  },
  {
    id: 14,
    img: (require('../../assets/img/bootstrap.svg').default),
    name: 'Bootstrap 3, 4 e 5'
  },
  {
    id: 15,
    img: (require('../../assets/img/sass.svg').default),
    name: 'SASS'
  },
  {
    id: 16,
    img: (require('../../assets/img/jquery.svg').default),
    name: 'Jquery'
  },
  {
    id: 17,
    img: (require('../../assets/img/gulp.svg').default),
    name: 'Gulp'
  },
  {
    id: 18,
    img: (require('../../assets/img/xampp.svg').default),
    name: 'Xampp'
  }  
]
export default function AppTecnologia(){
  return(
    <section className="tools" id="tecnologias">
      <Container>
        <Row>
          <Col className='justify-content-md-center d-flex'>
              <div className="content ">
                <h2 className="title prt-cont">Tecnologias</h2>
                <h2 className="title eng-cont">Tecnologies</h2>
              </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col>          
              <div className="content-item">
                {
                  CoursesData.map(courses=>{
                    return(
                      <div className="item-line" key={courses.id}>
                        <div className="item">
                          <Image src={courses.img} width="100%" height="100%" alt="wordpress" title="wordpress" />

                          <h3 className="title">{courses.name}</h3>
                        </div>
                        <hr className="line"/>
                      </div>
                      
                    )
                  })
                }
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}