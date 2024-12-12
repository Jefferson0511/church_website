import React from "react";
import "./media.css"; // Separate CSS file for Media

const Media = () => {
  const galleryData = [
    {
      title: "Sunday School Christmas Program",
      description:
        "Celebrating our church's 50th anniversary with joy and gratitude.",
      image: "/images/media_p/christmas.jpg",
    },
    {
      title: "Children's Sunday",
      description:
        "A wonderful time of spiritual growth and fellowship for our youth.",
      image: "/images/media_p/children.jpg",
    },
    {
      title: "NMSI YOUTH FEST-OVERALL RUNNER UP",
      description:
        "Joyful Christmas celebrations with carols and a beautiful nativity play.",
      image: "/images/media/c3.png",
    },
    {
      title: "YOUTH RETREAT ON LEADERSHIP",
      description:
        "A special service where new believers were baptized into the faith.",
      image: "/images/media_p/youth_retreat.jpg",
    },
    {
      title: "CHOIR SUNDAY",
      description:
        "Serving our community through charity events and outreach programs.",
      image: "/images/media_P/CHOIR.jpg",
    },
    {
      title: "VBS",
      description:
        "A celebration of the resurrection with a sunrise service and worship.",
      image: "/images/media/c6.png",
    },
    {
      title: "VBS",
      description:
        "A celebration of the resurrection with a sunrise service and worship.",
      image: "/images/media/c6.png",
    },
    {
      title: "VBS",
      description:
        "A celebration of the resurrection with a sunrise service and worship.",
      image: "/images/media/c6.png",
    },
    {
      title: "VBS",
      description:
        "A celebration of the resurrection with a sunrise service and worship.",
      image: "/images/media/c6.png",
    },
  ];

  return (
    <div className="media-container">

      <div className="mediaHeader">
        <h1>Media Gallery</h1>
        <h2>I thank my God in all my <span id="highlight">remembrance</span> of you</h2>
      </div>
      
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
