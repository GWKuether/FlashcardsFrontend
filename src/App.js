import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { Container,  Row, Col } from 'react-bootstrap';
import './App.css';

function App() {

  return (
    <Container fluid>
      <Row>
        <Col>
        <Header />
        </Col>
      </Row>
      <Row>
        <Main/>
      </Row>

    </Container>
  );
}

export default App;
