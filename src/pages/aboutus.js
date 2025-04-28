import React from "react";
import Footer from "../components/footer";
import "./aboutus.css";

const AboutUs = () => {
  const pcMembers = [
    // { name: "Rev S Suresh Thilak kumar", role: "Chairman", image: "images/pc/tilak.jpg" },
    { name: "Rev. S. Salomon Soundara Dass", role: "Chairman & \n Presbyter in-charge", image: "images/pc/pastor1.jpg" },
    { name: "Mr. N.G.R Christopher Selvaraj", role: "Hon. Secretary", image: "images/pc/ngr.jpg" },
    { name: "Mr C. Susikar Moses", role: "Hon. Treasurer", image: "images/pc/susikar.jpg" },
    { name: "Mr. K. Devaraj", role: "", image: "images/pc/devaraj.jpg" },
    { name: "Mr. Y. Sathyaraj", role: "", image: "images/pc/sathyaraj.jpg" },
    { name: "Mr. A. Wesley John", role: "", image: "images/pc/wesley.jpg" },
    { name: "Mr. D. Sundar Raj", role: "", image: "images/pc/sundar.jpg" },
    { name: "Mr. R. Vinod Kumar", role: "", image: "images/pc/vinoth.jpg" },
    {name:"Mr. K. Vijay",role:"",image:"images/pc/vijay.jpg"},
    {name:"To be added",role:"",image:"images/pc/beula1.jpg"},
    { name: "Mrs. Victoria Kirubagaram", role: "", image: "images/pc/victoria.jpg" },
    { name: "Mrs. Chandra Rose Lily", role: "", image: "images/pc/chandra.png" },
    {name:"Mrs. R. Anna Pushpam",role:"",image:"images/pc/annapushpam.jpg"},
    { name: "Mrs. Shirley Mathan Raj", role: "", image: "images/pc/shirley.png" },
    { name: "Mr. C. Alex Gladson", role: "", image: "images/pc/alex.jpg" },
    { name: "Mrs. J. Olivia Merlyn ", role: "", image: "images/pc/olivia.jpg" },
    { name: "Miss P. Kezia Shirley Caroline", role: "", image: "images/pc/kezia.jpg" },
    {name:"Mrs. B. Beaula",role:"",image:"images/pc/beula.jpg"},
    {name:"To be added",role:"",image:"images/pc/beula1.jpg"},
    // {name:"Mr. Samuel",role:"Sexton",image:"images/pc/sam.jpg"}
  ];
  const officeMembers = [
    { name: "Rev. S. Salomon Soundara Dass", role: "Chairman &\nPresbyter in-charge", image: "images/office/pastor1.jpg" },
    { name: "Mr. P D Thomas", role: "Cup Bearer", image: "images/office/pdthomas.jpg" },
    { name: "Mr. R Pushparaj", role: "Cup Bearer", image: "images/office/pushparaj1.jpg" },
    { name: "Mr. Y R Paul Ephraim", role: "Clerk", image: "images/office/paul.jpg" },
    { name: "Mr. M Samuel", role: "Sexton", image: "images/office/sam.jpg" },
  ];
  return (
    <>
      <main className="about-main">
        <div className="head">
          <h1>About the Church</h1>
          <h2>Built on His Rock</h2>
        </div>

        <div className="section">
          <img src="images/media/c2.png" alt="St. Matthews Church" />
          <div className="write-up">
            <p>
              Protestant Christianity reached Chennai nearly 300 years ago and later spread to Tamil Nadu through the efforts of the Wesleyan Methodist Missionary Society (WMM) and the Church of Scotland Mission (CSM). Rev. John Anderson of CSM arrived in 1837, establishing schools and congregations, while James Lynch, the first Methodist missionary to India, arrived in 1817, preaching and building churches in Royapettai and Broadway. By the 1870s, Methodist missionaries extended their work to rural villages, preaching in Tamil and seeing growth among oppressed communities.
            </p>
            <p>
              Tambaram, once a small village, evolved significantly over time. The Beach-Tambaram electric railway terminal (1931), the relocation of Madras Christian College (1937), and the establishment of the Air Force Station (1942) contributed to its transformation into a thriving town. Christianity in Tambaram began with evangelistic efforts from Vandalur, culminating in Rev. William Gnanananda baptizing 11 members on December 21, 1929, forming the first congregation amid opposition.
            </p>
            <p>
              When the Church of South India (CSI) was formed in 1947, Tambaram's Christian presence strengthened. The foundation stone for the Church of Jesus the Lord was laid on January 16, 1954, by Rt. Rev. A. M. Hollis, with the motto "That they all may be one." Dedicated on April 13, 1954, the church became a beacon of worship and unity, embodying the mission to “Worship the Lord in the beauty of Holiness.”
            </p>
          </div>
        </div>

        <div className="pc-members">
          <h2>PC Members</h2>
          <div className="grid-container">
            {pcMembers.map((member, index) => (
              <div key={index} className="member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pc-members">
          <h2>Church Office</h2>
          <div className="grid-container">
            {officeMembers.map((member, index) => (
                <div key={index} className="member">
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
