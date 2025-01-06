import { Row, Col, Container } from 'reactstrap';
import Info from "./Info"; 
import Inputs from "./Inputs";

function Contact() {
    return(
        <div>
            <Container className="mt-4">
                <Row className="justify-content-around align-items-start">
                    <Col xs="12" sm="8" lg="4">
                        <Info/>
                    </Col>

                    <Col sm="12" lg="6" className="mb-3">
                        <Inputs/>
                    </Col>
                </Row>
            </Container>
        </div>
    ); 
}

export default Contact; 