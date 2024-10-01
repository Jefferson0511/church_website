import React from "react";
import "./media.css"; // Separate CSS file for Media

const Media = () => {
  const galleryData = [
    {
      title: "Church Anniversary",
      description:
        "Celebrating our church's 50th anniversary with joy and gratitude.",
      image: "/images/media/c1.jpg",
    },
    {
      title: "Youth Retreat 2024",
      description:
        "A wonderful time of spiritual growth and fellowship for our youth.",
      image: "/images/media/c2.png",
    },
    {
      title: "Christmas Celebration",
      description:
        "Joyful Christmas celebrations with carols and a beautiful nativity play.",
      image: "/images/media/c3.png",
    },
    {
      title: "Baptism Service",
      description:
        "A special service where new believers were baptized into the faith.",
      image: "/images/media/c4.png",
    },
    {
      title: "Community Outreach",
      description:
        "Serving our community through charity events and outreach programs.",
      image: "/images/media/c5.png",
    },
    {
      title: "Easter Service",
      description:
        "A celebration of the resurrection with a sunrise service and worship.",
      image: "/images/media/c6.png",
    },
  ];

  return (
    <div className="media-container">
      <h1 className="media-title">Media Gallery</h1>
      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.image} alt={item.title} className="gallery-image" />
            <div className="gallery-info">
              <h3 className="gallery-title">{item.title}</h3>
              <p className="gallery-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
