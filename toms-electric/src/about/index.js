import { Row, Col } from 'reactstrap'; 
import Picture from './Picture'; 
import Text from './Text'; 

function About() {
    return(
        <div className="alt-background full-view">
            <Row className="align-items-center justify-content-center">
                {/* Picture column */}
                <Col xs="12" lg="6" className="text-center">
                    <Picture />
                </Col>

                {/* Text column */}
                <Col xs="11" lg="5" className="text-center">
                    <Text />
                </Col>
            </Row>
        </div>
    ); 
}

export default About; 