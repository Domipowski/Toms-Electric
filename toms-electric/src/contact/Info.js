import {Card, CardTitle, CardBody, CardText, ListGroup, ListGroupItem } from 'reactstrap'; 
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Info() {
    return(
        <div>
            <Card style={{ borderRadius: 8 }}>
                <img
                    alt="Tom's Electric Logo"
                    src="/logo.png"
                />

                <CardBody>
                    <CardTitle tag="h5" className="text-center">
                        <FaPhoneAlt /> (631) 977-2025
                    </CardTitle>

                    <CardTitle tag="h5" className="text-center">
                        <MdEmail /> contact@tomselectric.com
                    </CardTitle>
                </CardBody>

                <ListGroup flush>
                    <ListGroupItem>
                        <div className="text-center">
                            <h5>Hours of Operation</h5> 
                            <CardText>
                                Our hours vary by weekday. We are closed on weekends. For urgent matters, please contact me directly. 
                            </CardText>
                        </div>
                    </ListGroupItem>
                    
                    <ListGroupItem className="text-center">
                        To discuss your projects or request an estimate, please complete the form provided with your specific requirements.
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    ); 
}

export default Info; 