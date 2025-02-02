import React from 'react'; 
import Masonry from "react-masonry-css";

function Photos() {
    const images = [
        { src: "works/Pool_Panel.jpg", alt: "Pool Panel" },
        { src: "works/Bathroom_Lights_1.jpg", alt: "Bathroom Lights" },
        { src: "works/EV_Charger.jpg", alt: "EV Charger" },
        { src: "works/Floor_Heat.jpg", alt: "Floor Heat" }, 
        { src: "works/Kitchen_1.jpg", alt: "Kitchen 1" },
        { src: "works/Kitchen_2.jpg", alt: "Kitchen 2" },
        { src: "works/Kitchen_3.jpg", alt: "Kitchen 3" },
        { src: "works/Kitchen_4.jpg", alt: "Kitchen 4" },
        { src: "works/400_Amp_Service.jpg", alt: "400 Amp Service" },
        { src: "works/Meter_Pan.jpg", alt: "Meter Pan" }, 
        { src: "works/Outdoor_Lighting_1.jpg", alt: "Outdoor Lighting" },
        { src: "works/Panel_1.jpg", alt: "Electrical Panel" },
        { src: "works/Rough_Wiring_1.jpg", alt: "Rough Wiring 1" },
        { src: "works/Rough_Wiring_2.jpg", alt: "Rough Wiring 2" },
    ];
    
    const breakpointColumns = {
        default: 3, // Number of columns for larger screens
        1100: 2,    // Number of columns for medium screens
        700: 1,     // Number of columns for small screens
    };

    return(
        <div className="photos-container">
            <Masonry
                breakpointCols={breakpointColumns}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {images.map((img, index) => (
                <img
                    key={index}
                    src={img.src}
                    alt={img.alt || `Image ${index + 1}`}
                    className="gallery-image"
                />
                ))}
            </Masonry>
        </div>
    ); 
}

export default Photos; 