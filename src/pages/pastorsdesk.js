import React from "react";
import Footer from "../components/footer";
import "./pastorsdesk.css";

const PastorsDesk = () => {
  return (
    <>
      <div className="pastor-main">
        <div className="head">
          <h1>Pastor's Desk</h1>
          <h2>Rev. S. Salomon Soundara Dass</h2>
          <h4> Chairman & Presbyter in-charge</h4>
        </div>

        <div className="pastor-welcome-message">
          <div className="pastorPhoto">
            <img
              src="images/pastor1.jpg"
              alt="Photo of the Pastor"
              className="pastor-image"
            />
          </div>
          <div className="pastorMessage">
            <p>
              Beloved people of God, I greet you in the name of our Savior, Jesus Christ. As we face another year filled with challenges, we are reminded of the hope that the birth of Jesus brings. In Isaiah 9:2, we read, “The people who walked in darkness have seen a great light,” and in Luke 2:10, “I bring you good news that will cause great joy for all the people.” The birth of Jesus continues to offer us light, joy, and hope in uncertain times.
              <br />
              <br />
              The shepherds and the wise men, from different walks of life, both found joy in the birth of Christ (Matthew 2:10, Luke 2:20). Jesus came for all people, bringing peace and joy to every heart. Despite the struggles we face, the birth of Jesus reminds us that we are not alone. His light dispels our fears and fills us with hope for the future. As we celebrate Christmas 2024 and welcome the New Year 2025, let us share this joy with others and embrace the peace that Christ offers.
              <br />
              <br />
              May the birth of Jesus bring renewed hope, joy, and strength to all. Let us enter this season with faith and courage, knowing that Christ has come to bring peace to the world. 
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PastorsDesk;
