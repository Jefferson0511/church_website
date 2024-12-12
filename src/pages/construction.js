import React, { useState, useEffect } from "react";
import "./construction.css";

const ConstructionPage = () => {
  const images = [
    "/images/construction/1.JPG",
    "/images/construction/2.JPG",
    "/images/construction/3.JPG",
    "/images/construction/4.JPG",
    "/images/construction/5.JPG",
    "/images/construction/6.JPG",
    "/images/construction/7.JPG",
    "/images/construction/8.JPG",
    "/images/construction/9.JPG",
    "/images/construction/10.JPG",
    "/images/construction/11.JPG",
    
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Navigate to the previous image
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="constructionPageWrapper">
      <div className="constructionHeader">
        <h1>Construction</h1>
        <h2>
          Let us rise up and <span id="highlight">build</span>
        </h2>
      </div>
      <div className="slideshow-container">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="slideshow-image"
        />
        {/* Navigation Buttons */}
        <button className="slideshow-button prev" onClick={handlePrevious}>
          &#10094; {/* Left arrow symbol */}
        </button>
        <button className="slideshow-button next" onClick={handleNext}>
          &#10095; {/* Right arrow symbol */}
        </button>
      </div>
    </div>
  );
};

export default ConstructionPage;