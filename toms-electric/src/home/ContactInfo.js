import React from 'react'; 
import { Row, Col, Container } from 'reactstrap';

function ContactInfo() {
    return(
        <Container className="background-color">
            <Row className="justify-content-center align-items-center py-5">
                {/* Left/Top */}
                <Col xs="12" md="4" className="text-center cell-one">
                    <h1 className="contact-name">Cell</h1>
                    <h1 className="contact-info">(631) 977-2025</h1>
                </Col>

                {/* Right/Bottom */}
                <Col xs="12" md="4" className="text-center cell-two">
                    <h1 className="contact-name">Email</h1>
                    <h1 className="contact-info">tomaszpolakowski77@gmail.com</h1> {/* contact@tomselectric.com */}
                </Col>
            </Row>
        </Container>
    ); 
}

export default ContactInfo; 