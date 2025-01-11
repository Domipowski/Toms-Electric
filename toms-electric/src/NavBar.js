import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();

  return (
    <div className="text-white py-4 nav-bar">
      <Container>
        <Row className="align-items-center justify-content-center">
          
          {/* Logo */}
          <Col xs="12" md="4" className="d-flex align-items-center justify-content-center mb-3 mb-md-0">
            <img src="/web-style/logo_only.png" alt="Tom's Electric Logo" className="logo-size clickable" onClick={() => navigate("")}/>
            <div className="clickable" onClick={() => navigate("")}>
              <h1 className="mb-0">Tom's</h1>
              <h1 className="mb-0">Electric</h1>
              <h1 className="mb-0">inc.</h1>
            </div>
          </Col>

          {/* Navigation Buttons */}
          <Col xs="12" md="8" className="d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
            <Button 
              className="mx-1 mx-md-2 nav-btns"
              onClick={() => navigate("")}
            >
              Home
            </Button>
            
            <Button 
              className="mx-1 mx-md-2 nav-btns"
              onClick={() => navigate("/gallery")}
            >
              Gallery
            </Button>
            
            <Button 
              className="mx-1 mx-md-2 nav-btns"
              onClick={() => navigate("/about")}
            >
              About
            </Button>
            
            <Button 
              className="mx-1 mx-md-2 nav-btns"
              onClick={() => navigate("/contact")}
            >
              Contact
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;