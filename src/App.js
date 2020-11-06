import { Container as BSContainer, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';
import Menu from './components/Menu/Menu';
import InputData from './components/InputData/InputData';
import InputDataDetail from './components/InputData/InputDataDetail';
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login';
import Forbidden from './components/Forbidden/Forbidden';
import PPError from './components/Error/Error';
import AuthRoute from './AuthRoute';

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
            <Router>
              <Switch>
                <Route path="/" exact component={Pages} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <AuthRoute path="/input-data-detail/:userId" component={InputDataDetail} />
                <AuthRoute path="/input-data" component={InputData} />
                <Route path="/forbidden" component={Forbidden} />
                <Route component={PPError} />
              </Switch>
            </Router>
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
  