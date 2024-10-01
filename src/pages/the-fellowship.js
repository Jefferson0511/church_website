import React, { useState } from "react";
import "./the-fellowship.css"; // Separate CSS for Home

const Fellowship = () => {
  // State to track which card is flipped
  const [flippedCard, setFlippedCard] = useState(null);

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
      people: [
        { name: "Ruth Gnana Deepa", image: "/images/w1.jpg" },
        { name: "Chandra Samson", image: "/images/w2.jpeg" },
        { name: "Hilda Devaraj", image: "/images/w3.jpg" },
      ],
    },
    {
      title: "Men's Fellowship",
      front: "Front Content 2",
      back: "Incharges",
      frontImage: "/images/1.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman- Rev.S.Salomon Soundara Dass",
      seceretary: "In charges- Mr.P.Asvinkumar and Mr.D.Rajkumar Davidson",
      people: [
        { name: "Secretary: J.Samson Kirubakaran", image: "/images/m1.jpg" },
        { name: "Treasurer: A.B. Johnson Thiruvengadam", image: "/images/m2.jpg" },
      ],
    },
    {
      title: "Sunday School",
      front: "Front Content 3",
      back: "Incharges",
      frontImage: "/images/1.jpg",
      backImage: "/images/1.jpg",
      people: [
        { name: "Samson", image: "/images/m1.jpg" },
        { name: "Johnson", image: "/images/m2.jpg" },
      ],
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
      people: [
        { name: "Youth Leader: Dr. Devasitham", image: "/images/y1.jpg" },
        { name: "Secretary: J.Jeya Rueben", image: "/images/y1.jpg" },
        { name: "Treasurer: Daphne", image: "/images/y1.jpg" },
      ],
    },
    {
      title: "Tamil Choir",
      front: "Front Content 5",
      back: "Incharges",
      frontImage: "/images/1.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman - Rev.S.Salomon Soundara Dass",
      seceretary: "Mr.A.Wesley John - Tamil Choir Admin",
      people: [{ name: "Wesley John", image: "/images/t1.jpg" }],
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

    {
      title: "Evangelism",
      front: "Front Content 6",
      back: "Incharges",
      frontImage: "/images/1.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman - Rev.S.Salomon Soundara Dass",
      seceretary: "In Charge - Dr.J.Reeves Wesley",
    },
    {
      title: "Elder's Fellowship",
      front: "Front Content 6",
      back: "Incharges",
      frontImage: "/images/1.jpg",
      backImage: "/images/1.jpg",
      president: "Chairman - Rev.S.Salomon Soundara Dass",
      seceretary: "In Charge - Dr.J.Reeves Wesley",
      people: [
        { name: "Secretary: D. Rajkumar Davidson", image: "/images/e1.jpg" },
        { name: "Treasurer: S. Stepher Nicholas", image: "/images/e2.jpg" },
      ],
    },
  ];


  return (
    <main className="fellowship-main">
      <div className="fellowship-overlay"></div>
      <div className="fellowship-welcome-message">
        <h1>Fellowship</h1>
        <h2>who has called you into <span id="highlight">fellowship</span> with his Son</h2>
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
                <div className="people-grid">
                  {card.people &&
                    card.people.map((person, i) => (
                      <div key={i} className="person-card">
                        <img src={person.image} alt={person.name} />
                        <p>
                          <b className="p-head">
                            {person.name.split(": ")[0]}
                          </b>
                        </p>{" "}
                        {/* Title in bold */}
                        <p>{person.name.split(": ")[1]}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Fellowship;
