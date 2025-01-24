import React from 'react'; 
import { Col } from 'reactstrap'; 

function HomeAbout() {
    return(
        <div className="d-flex justify-content-center text-center about-background py-5">
            <div className="background-darkener-more"></div> 
            <Col xs="11" md="8">
                <div className="about-title">
                    Tom's Electric Inc.
                </div>
                <div className="mt-2 about-body">
                    At Tom's Electric Inc., you'll work directly with me, Tomasz Polakowski, a licensed master electrician based in Suffolk County. 
                    As a one-person operation, I take pride in personally handling every aspect of your electrical project, from the initial consultation to the final touches.
                </div>
                <div className="mt-2 about-body">
                    With 20 years of hands-on experience, I specialize in residential installations, panel upgrades, and specialty services. 
                    Operating as a solo business means you get dedicated attention, consistent communication, and a commitment to getting the job done right the first time.
                </div>
                <div className="mt-2 about-body">
                    I understand that every project is unique, which is why I take the time to assess your needs and provide honest, practical solutions. 
                    Whether you're tackling a home renovation, need urgent repairs, or want to plan for future upgrades, my goal is to ensure your safety and satisfaction.
                </div>
                <div className="mt-2 about-body">
                    Being a local business in Riverhead, NY, I'm proud to serve select areas of Suffolk County. 
                    If you're looking for personalized service and a professional you can trust, I'd be happy to help.            
                </div>
            </Col>
        </div>
    ); 
}

export default HomeAbout; 