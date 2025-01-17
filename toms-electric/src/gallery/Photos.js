import React from 'react'; 
import Masonry from "react-masonry-css";

function Photos() {
    const images = [
        { src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg", alt: "Image 1" },
        { src: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg", alt: "Image 2" },
        { src: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", alt: "Image 3" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQOmWaUAEICbwQ6IZFTNvszqzxitoRog0MQw&s", alt: "Image 4" }, 
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s", alt: "Image 5" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxljCiU3pRUXpw-39aklTNk7BDV3G9Dn7ocw&s", alt: "Image 6" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s", alt: "Image 5" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxljCiU3pRUXpw-39aklTNk7BDV3G9Dn7ocw&s", alt: "Image 6" },
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