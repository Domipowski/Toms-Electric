import {Card, CardTitle, CardBody, CardText, ListGroup, ListGroupItem } from 'reactstrap'; 
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Info() {
    return(
        <div>
            <Card>
                <img
                    alt="Tom's Electric Logo"
                    src="web-style/logo.png"
                />

                <CardBody className="alt-background">
                    <CardTitle tag="h5" className="text-center">
                        <FaPhoneAlt /> (631) 977-2025
                    </CardTitle>

                    <CardTitle tag="h5" className="text-center">
                        <MdEmail /> contact@tomselectric.com 
                    </CardTitle>

                    <CardTitle tag="h5" className="text-center">
                        <FaLocationDot /> Riverhead, NY 
                    </CardTitle>
                </CardBody>

                <ListGroup flush>
                    <ListGroupItem className="alt-background">
                        <div className="text-center">
                            <h5 className="underline">Hours of Operation</h5> 
                            <CardText>
                                Our hours vary by weekday. We are closed on weekends. For urgent matters, please contact me directly. 
                            </CardText>
                        </div>
                    </ListGroupItem>
                    
                    <ListGroupItem className="text-center alt-background">
                        <h5 className="underline">Project Details</h5> 
                        <CardText>
                            To discuss your projects or request an estimate, please complete the form provided with your specific requirements. 
                            Please include the general area you're located in for my planning. 
                        </CardText>
                    </ListGroupItem>

                    
                    <ListGroupItem className="text-center alt-background">
                        <h5 className="underline">Location Details</h5> 
                        <CardText>
                            I work in the general Riverhead area, going as far out as SouthHampton, Southold, and Port Jefferson in each respective direction. 
                        </CardText>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    ); 
}

export default Info; 