import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container as BSContainer, Col, Row } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <BSContainer id="content" fluid="xl">
      <Row className="no-gutters border border-darker border-top-0 border-bottom-0">
        <Col >
          <Header/>
          <Menu/>
        </Col>
      </Row>
      <Row className="no-gutters border border-darker border-top-0 border-bottom-0">
        <Col>
          <Pages/>
        </Col>
      </Row>
      <Row className="no-gutters border border-darker border-top-0">
        <Col>
          <Footer/>
        </Col>
      </Row>
    </BSContainer>
  );
}

export default App;
