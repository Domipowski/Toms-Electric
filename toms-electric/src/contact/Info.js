import {Card, CardTitle, CardBody, CardText, ListGroup, ListGroupItem } from 'reactstrap'; 
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Info() {
    return(
        <div>
            <Card className="mb-4">
                <img
                    alt="Tom's Electric Logo"
                    src="web-style/logo.png"
                />

                <CardBody className="alt-background">
                    <CardTitle tag="h5" className="text-center">
                        <FaPhoneAlt /> (631) 977-2025
                    </CardTitle>

                    <CardTitle tag="h5" className="text-center">
                        <MdEmail /> tomselectric@mail.com 
                    </CardTitle>

                    <CardTitle tag="h5" className="text-center">
                        <FaLocationDot /> Riverhead, NY 
                    </CardTitle>
                </CardBody>

                <ListGroup flush>
                    <ListGroupItem className="alt-background">
                        <div className="text-center">
                            <h5 className="underline">Buisness Hours</h5> 
                            <CardText>
                                We are available to respond to inquiries on weekdays from 8:00 AM to 6:00 PM.
                                Our office is closed on weekends.
                                For urgent matters, please contact me directly. 
                                Otherwise, feel free to fill out the provided form, and we will get back to you during business hours.              
                            </CardText>
                        </div>
                    </ListGroupItem>

                    <ListGroupItem className="text-center alt-background">
                        <h5 className="underline">Location Details</h5> 
                        <CardText>
                            Our business is based in Riverhead, New York. 
                            As a&nbsp;
                            <a href="https://ca.suffolkcountyny.gov/dcasearch" target="_blank" rel="noopener noreferrer" className="links-yellow">Liscenced Master Electrician</a> 
                            &nbsp;in Suffolk County, I serve local clients within the area.
                            Please note that we focus on providing services to select parts of Suffolk County so please contact us to confirm if we can assist you. 
                        </CardText>
                    </ListGroupItem>
                    
                    <ListGroupItem className="text-center alt-background">
                        <h5 className="underline">Project Details</h5> 
                        <CardText>
                            To discuss your projects or request an estimate, please complete the form provided with your specific requirements. 
                            Be sure to include your general location to help with planning. 
                        </CardText>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    ); 
}

export default Info; 