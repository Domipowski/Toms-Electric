import { Row, Col } from 'reactstrap'; 

function FootNotes() {
    return(
        <div className="py-4 background-color text-center footer-font">
            <Row>
                <Col xs="12" sm="12" md="12" lg="4" className="mb-2"> 
                    © 2025 Tom's Electric Inc.
                </Col>
                <Col xs="12" sm="12" md="12" lg="4" className="mb-2"> 
                    <a 
                        href="https://ca.suffolkcountyny.gov/dcasearch" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="links"
                    >
                        Suffolk County Master Electrician
                    </a>
                </Col>
                <Col xs="12" sm="12" md="12" lg="4" className="mb-2"> 
                    Site Design by&nbsp; 
                    <a 
                        href="https://www.linkedin.com/in/dominick-polakowski" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="links"
                    >
                        Dominick Polakowski
                    </a>
                </Col>
            </Row>
        </div>
    ); 
}

export default FootNotes; 