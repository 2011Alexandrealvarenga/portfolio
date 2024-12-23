import { Col, Container, Row } from "react-bootstrap";
import '../../assets/css/curso.css';
const CourseData =[
  {
    id: 1,
    name:'Wordpress',
    description:'Do Zero ao Profissional',
    data:'08/2022',
    horas:'145h'
  },
  {
    id: 2,
    name:'Wordpress Plugins',
    description:'Desenvolvimento de Plugins para Wordpress - criação de 10 Plugins',
    data:'10/2020',
    horas:'10h'
  },
  {
    id: 3,
    name:'Wordpress',
    description:'Criação de temas do zero',
    data:'08/2020',
    horas:'12h'
  },
  {
    id:4,
    name:'Wordpress & Elementor',
    description:'Como construir websites',
    data:'09/2023',
    horas:'21h'

  },
  {
    id:5,
    name:'SEO Wordpress',
    description:'Como aparecer no Google',
    data:'09/2020',
    horas:'10h'
  },
  {
    id:6,
    name:'Bootstrap 4',
    description:'Curso completo',
    data:'08/2020',
    horas:'19h'
  },
  {
    id:7,
    name:'Boostrap 5',
    description:'Completo, Prático e desde do zero',
    data:'08/2020',
    horas:'34h'
  },
  {
    id:8,
    name:'Tailwind CSS',
    description:'Estilização de websites',
    data:'10/2024',
    horas: '20h'
  },
  {
    id:9,
    name:'PHP',
    description:'Do zero a maestria + 4 projetos',
    data:'06/2022',
    horas:'33h'
  },
  {
    id:10,
    name:'PHP 8 e MySql',
    description:'Curso completo',
    data:'05/2020',
    horas:'20h'
  },
  {
    id:11,
    name:'Git/GitHub',
    description:'Curso completo',
    data:'09/2021',
    horas:'20h'
  },
  {
    id:12,
    name:'SEO 2023',
    description:'Do zero a até a primeira posição no Google',
    data:'03/2023',
    horas:'10h'
  },
  {
    id:13,
    name:'Figma',
    description:'Interfaces com Figma do zero',
    data:'04/2023',
    horas:'22h'
  },
  {
    id:14,
    name:'Jquery',
    description:'Manipulação de elementos em websites',
    data:'06/2021',
    horas: '30h'
  },
  {
    id: 15,
    name:'Javascript',
    description:'Manipulação de elementos em websites',
    data:'05/2024',
    horas:'66h'
  }  
]
export default function AppCurso(){
  return(
    <section className="curso" id="curso">
      <Container>
        <Row>
          <Col>
            <h2 className="title justify-content-center d-flex">Cursos</h2>
            <div className="content">
              {
                CourseData.map(curso =>{
                  return(
                    <div className="item" key={curso.id}>
                      <span className="sub-title">Curso: </span> <span>{curso.name}</span><br />
                      <span className="sub-title">Descrição: </span> <span>{curso.description}</span><br />
                      <span className="sub-title">Horas: </span> <span>{curso.horas}</span><br />
                      <span className="sub-title">Data: </span> <span>{curso.data}</span>
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