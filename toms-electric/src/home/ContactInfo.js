import React from 'react'; 
import { Row, Col, Container } from 'reactstrap';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function ContactInfo() {
    return(
        <Container className="background-color">
            <Row className="justify-content-center align-items-center py-5">
                {/* Left/Top */}
                <Col xs="12" md="4" className="text-center cell-one">
                    <h1 className="contact-name"><FaPhoneAlt/></h1>
                    <h1 className="contact-info">(631) 860-3627</h1>
                </Col>

                {/* Right/Bottom */}
                <Col xs="12" md="4" className="text-center cell-two">
                    <h1 className="contact-name"><MdEmail/></h1>
                    <h1 className="contact-info">tomselectric@mail.com</h1> 
                </Col>
            </Row>
        </Container>
    ); 
}

export default ContactInfo; 