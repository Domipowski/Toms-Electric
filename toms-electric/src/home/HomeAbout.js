import React from 'react'; 
import { Col } from 'reactstrap'; 

function HomeAbout() {
    return(
        <div className="d-flex justify-content-center text-center about-background py-5">
            <div className="background-darkener"></div> 
            <Col xs="11" md="8">
                <div className="about-title">
                    Tom's Electric Inc.
                </div>
                <div className="about-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies suscipit quam. Praesent ornare arcu a magna commodo, a lacinia nisi mollis. Suspendisse potenti. Morbi scelerisque quam vel sapien tristique ultricies. Mauris vel ultricies diam, at dictum ex. Maecenas aliquam ipsum lacus, ac tristique massa tempor eu. Aliquam sit amet orci sem. Suspendisse a tristique turpis, ac gravida ipsum. Vivamus consectetur dui ipsum, id lobortis risus tristique nec. Suspendisse sed suscipit quam. Nam ut urna nisi. Mauris feugiat nunc eget massa hendrerit, eu finibus dui dignissim. In hac habitasse platea dictumst. Morbi non mattis diam. Nulla viverra vitae tortor ut imperdiet.
                </div>
            </Col>
        </div>
    ); 
}

export default HomeAbout; 