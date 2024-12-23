import React from 'react'; 
import Carousel from "react-multi-carousel";// https://www.npmjs.com/package/react-multi-carousel?activeTab=readme 
import "react-multi-carousel/lib/styles.css"; 
import { Button } from 'reactstrap';

class Slides extends React.Component {
    render() {
        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
              slidesToSlide: 1 
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
              slidesToSlide: 1 
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1 
            }
        };

        return(
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} 
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div>
                    <img src="kitchen_lights.webp" alt="Kitchen Lights" className="background-image"/>
                    <div className="background-darkener"></div> 

                    <div className="carousel-content">
                        <div className="carousel-title">Kitchen Lighting</div>
                        <hr className="carousel-line" />
                        <div className="carousel-text">Expert solutions for overhead, cabinet, and accent kitchen lighting</div>

                        <Button color="warning" className="carousel-btn">
                            Contact Me
                        </Button>
                    </div>
                </div>

                <div>
                    <img src="house_lights.jpg" alt="Outdoor Lighting" className="background-image"/>
                    <div className="background-darkener"></div> 

                    <div className="carousel-content">
                        <div className="carousel-title">Outdoor Lighting</div>
                        <hr className="carousel-line" />
                        <div className="carousel-text">Reliable installation of driveway, flood, and garage lighting</div>

                        <Button color="warning" className="carousel-btn">
                            Contact Me
                        </Button>
                    </div>
                </div>
                <div>
                    <img src="bathroom_lights.webp" alt="Bathroom Lighting" className="background-image"/>
                    <div className="background-darkener"></div> 

                    <div className="carousel-content">
                        <div className="carousel-title">Bathroom Lighting</div>
                        <hr className="carousel-line" />
                        <div className="carousel-text">Professional setup of vanity, overhead, and shower lighting</div>

                        <Button color="warning" className="carousel-btn">
                            Contact Me
                        </Button>
                    </div>
                </div>
                <div>
                    <img src="electrical_panel.jpg" alt="Electrical Panels" className="background-image"/>
                    <div className="background-darkener"></div> 

                    <div className="carousel-content">
                        <div className="carousel-title">Electrical Panels</div>
                        <hr className="carousel-line" />
                        <div className="carousel-text">Expert installation, maintenance, and replacement of electrical panels</div>

                        <Button color="warning" className="carousel-btn">
                            Contact Me
                        </Button>
                    </div>
                </div>
            </Carousel>
        );
    }
}

export default Slides; 