import React, { useState, useEffect } from "react";
import "./payments.css"; // Separate CSS for Home
import qrCode from "../assets/sampleQRCode.png";

const bibleVerses = [
  "John 3:16 - For God so loved the world...",
  "Psalm 23:1 - The Lord is my shepherd, I lack nothing.",
  "Philippians 4:13 - I can do all things through Christ...",
  "Romans 8:28 - And we know that in all things God works for the good...",
  "Proverbs 3:5 - Trust in the Lord with all your heart...",
];

const Payments = () => {
  const [currentVerse, setCurrentVerse] = useState(0);

  useEffect(() => {
    const verseInterval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % bibleVerses.length);
    }, 20000); // Change verse every 20 seconds

    return () => clearInterval(verseInterval);
  }, []);

  return (
    <div className="paymentsPageWrapper">
      <div className="paymentsHeader">
        <h1>Donate</h1>
        <h2>
          God loves a <span id="highlight">cheerful</span> giver
        </h2>
      </div>
      <div className="paymentsBody">
        <div className="bankSection">
          <h3>Bank Details</h3>
          <hr />
          <p>C.S.I. St. Matthew's Church</p>
          <p>Union Bank</p>
          <p>Account Number: 12345678xx</p>
          <p>Selaiyur, East Tambaram</p>
          <p>Chennai, Tamil Nadu, India</p>
        </div>
        <div className="qrCodeSection">
          <h3>UPI QR Code</h3>
          <hr />
          {/* <img src={qrCode} alt="QR Code" /> */}
        </div>
      </div>
    </div>
  );
};

export default Payments;
