import { Row, Col, Container } from 'reactstrap';
import Info from "./Info"; 
import Inputs from "./Inputs";

function Contact() {
    return(
        <Container className="mt-5">
            <Row className="justify-content-center align-items-center">
                <Col sm="12" lg="6" className="mb-4 mb-lg-0">
                    <Info/>
                </Col>

                <Col sm="12" lg="6">
                    <Inputs/>
                </Col>
            </Row>
        </Container>
    ); 
}

export default Contact; 