import Sidebar from '../Sidebar/Sidebar';
import { Container,  Row, Col } from 'react-bootstrap';




const Main = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col>
                <Sidebar />
                </Col>
            </Row>
        </Container>

     );
}
 
export default Main;