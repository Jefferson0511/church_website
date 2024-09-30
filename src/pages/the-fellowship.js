import React, { useState } from "react";
import "./the-fellowship.css"; // Separate CSS for Home

const Fellowship = () => {
  // State to track which card is flipped
  const [flippedCard, setFlippedCard] = useState(null);

  // Dummy data for flip cards including background images
  const cardData = [
    {
      title: "Women's Fellowship", // New title property
      front: "Front Content 1",
      back: "Incharges",
      frontImage: "/images/1.jpg",
      backImage: "/images/1.jpg",
      president: "President- Mrs. Sheeba Salomon",
      seceretary: "Secretary: Mrs.G.Angel Nesan",
      treasurer: "Treasruer: Mrs.A.Angel Mary Ashok",
    },
    {
      title: "Men's Fellowship",
      front: "Front Content 2",
      back: "Incharges",
      frontImage: "/images/1.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman- Rev.S.Salomon Soundara Dass",
      seceretary: "In charges- Mr.P.Asvinkumar and Mr.D.Rajkumar Davidson",
    },
    {
      title: "Sunday School",
      front: "Front Content 3",
      back: "Incharges",
      frontImage: "/images/1.jpg",
      backImage: "/images/1.jpg",
    },
    {
      title: "Youth Fellowship",
      front: "Front Content 4",
      back: "Incharges",
      frontImage: "/images/1.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman - Rev.S.Salomon Soundara Dass",
      seceretary: "Boys : Presbyter In-charge",
      treasurer: "Girls : Iyyar Amma",
    },
    {
      title: "Tamil Choir",
      front: "Front Content 5",
      back: "Incharges",
      frontImage: "/images/1.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman - Rev.S.Salomon Soundara Dass",
      seceretary: "Mr.A.Wesley John - Tamil Choir Admin",
    },
    {
      title: "English Choir",
      front: "Front Content 6",
      back: "Incharges",
      frontImage: "/images/1.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman - Rev.S.Salomon Soundara Dass",
      seceretary: "In Charge - Dr.J.Reeves Wesley",
    },
  ];


  return (
    <main className="fellowship-main">
      <div className="fellowship-overlay"></div>
      <div className="fellowship-welcome-message">
        <h1>Fellowship</h1>
        <p>
          Write up about fellowshipsWrite up about fellowshipsWrite up about
          fellowships Write up about fellowships Write up about fellowships
          Write up about fellowships Write up about fellowships Write up about
          fellowships Write up about fellowships Write up about fellowships
          Write up about fellowships Write up about fellowships Write up about
          fellowships Write up about fellowships Write up about fellowships
          Write up about fellowships Write up about fellowships Write up about
          fellowships
        </p>
      </div>
      <div className="flip-card-container">
        {cardData.map((card, index) => (
          <div key={index} className="flip-card">
            <h4 className="flip-card-title">{card.title}</h4>{" "}
            {/* Title for each card */}
            <div
              className={`flip-card-inner ${
                flippedCard === index ? "flipped" : ""
              }`}
            >
              <div
                className="flip-card-front"
                style={{ backgroundImage: `url(${card.frontImage})` }}
              >
                {/* <h3>{card.front}</h3> */}
                {/* <p>Click to Flip</p> */}
              </div>
              <div
                className="flip-card-back"
                style={{ backgroundColor: "#F5EFFF" }}
              >
                <h3>{card.back}</h3>
                <p>{card.president}</p>
                <p>{card.seceretary}</p>
                <p>{card.treasurer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Fellowship;
