import React from 'react'; import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Lights extends React.Component {
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
                ssr={true} // means to render carousel on server-side.
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
                    <div className="carousel-overlay"></div> 
                    <div className="carousel-title">Kitchen Lighting</div>

                    <div className="carousel-text">Overhead, Cabinet, and all kinds of kitchen lighting</div>
                </div>
                <div>
                    <img src="house_lights.jpg" alt="Outdoor Lighting" className="background-image"/>
                    <div className="carousel-overlay"></div> 
                    <div className="carousel-title">Outdoor Lighting</div>
                </div>
                <div>
                    <img src="bathroom_lights.webp" alt="Bathroom Lighting" className="background-image"/>
                    <div className="carousel-overlay"></div> 
                    <div className="carousel-title">Bathroom Lighting</div>
                </div>
                <div>
                    <img src="electrical_panel.jpg" alt="Electrical Panels" className="background-image"/>
                    <div className="carousel-overlay"></div> 
                    <div className="carousel-title">Electrical Panels</div>
                </div>
            </Carousel>
        );
    }
}

export default Lights; 