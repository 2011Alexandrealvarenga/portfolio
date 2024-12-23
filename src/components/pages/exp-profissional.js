// import { Col, Container, Row } from "react-bootstrap";
import { Col, Container, Row } from 'react-bootstrap';
import '../../assets/css/exp-profissional.css';

const ExperienciaData = [
  {
    id: 1,
    empresa: 'RGR Tecnologia da Informação LTDA',
    funcao: 'Analista Full Stack Wordpress/PHP',
    periodo: '10/2020 a 06/2022',
    atividades: 'Atuação com Wordpress, PHP, Criação de plugins no Wordpress, HTML, CSS 3 (Bootstrap/Sass), Javascript (Jquery), gulp (Minificação de arquivos JS/CSS/HTML), Servidor Xampp, BD MySql e Sql Server, Git, GitHub, GitLab e SEO forte atuação com correção de erros no SEMRUSH conforme demanda do marketing.'
  },
  {
    id: 2,
    empresa: 'InfoBruJac Informática Ltda',
    funcao: 'Analista Full Stack Wordpress',
    periodo: '02/2020 a 10/2020',
    atividades: 'Freelances de projetos utilizando as aplicações: Wordpress, PHP, Criação de plugins no Wordpress, HTML, CSS 3 (Bootstrap/Sass), Javascript (Jquery), gulp (Minificação de arquivos JS/CSS/HTML), Servidor Xampp, BD MySql e Sql Server, Git, GitHub, GitLab e SEO.'
  },
  {
    id: 3,
    empresa: 'OutRange Soluções Inteligentes Ltda.',
    funcao: 'Analista Front-End - Estágio',
    periodo: '02/2015 a 05/2015',
    atividades: 'Estágio em desenvolvimento Front-End, usando as ferramentas, HTML 5, CSS 3, Git, Bootstrap, Sass, JavaScript, Wordpress, e PHP. Modelava e programava em nível de estagio.'
  }
]
export default function AppEProfissional(){
  return(
    <section id='experiencia' className='experiencia'>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className=''> 
            <h2 className="title">Experiências Profissionais</h2>
            <div className="content">
              {
                ExperienciaData.map(experiencia =>{
                  return(                    
                    <div className="item" key={experiencia.id}>
                      <span>
                        <span className="sub-title">Empresa: </span>
                        {experiencia.empresa}
                      </span><br />
                      <span>
                        <span className='sub-title'>Função: </span>
                        {experiencia.funcao}
                      </span><br />
                      <span>
                        <span className='sub-title'>Periodo: </span>
                        {experiencia.periodo}
                      </span><br />
                      <span>
                        <span className='sub-title'>Atividades: </span>
                        {experiencia.atividades}
                      </span>
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