import React, { useState, useEffect } from "react";
import "./construction.css"; // Separate CSS for Home

const bibleVerses = [
  "John 3:16 - For God so loved the world...",
  "Psalm 23:1 - The Lord is my shepherd, I lack nothing.",
  "Philippians 4:13 - I can do all things through Christ...",
  "Romans 8:28 - And we know that in all things God works for the good...",
  "Proverbs 3:5 - Trust in the Lord with all your heart...",
];

const Home = () => {
  const [currentVerse, setCurrentVerse] = useState(0);

  useEffect(() => {
    const verseInterval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % bibleVerses.length);
    }, 20000); // Change verse every 5 seconds

    return () => clearInterval(verseInterval);
  }, []);

  return (
    <main className="construction-home-main">
      <div className="overlay"></div>
      <div className="construction-welcome-message">
        <h1>Media</h1>
        <h2>Faith. Community. Service</h2>
      </div>
      {/* <div className="verse-strip">
        <p>{bibleVerses[currentVerse]}</p>
      </div> */}
    </main>
  );
};

export default Home;
