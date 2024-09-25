import React, { useState, useEffect } from "react";
import "./pastorsdesk.css"; // Separate CSS for Pastorsdesk

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
    <main className="pastor-main">
      {/* <div className="pastor-overlay"></div> */}
      <div className="pastor-welcome-message">
        <h1>Pastor's Desk</h1>
        <h2>“Good News of Great Joy to All”</h2>
        <p>
          Beloved people of God, I greet all of you in the name of “Babe of
          Bethlehem”. In this pandemic condition everyone living with fear and
          looking for pandemic – free future. This year we are facing Christmas
          and New year with fearful situation, but, as we read in Isaiah 9:2
          “The people who walked in darkness have seen a great light;those who
          lived in a land of deep darkness on them light has shined” and also
          St. Luke 2:10 rightly says “Good News of Great Joy to All”. Yes, the
          Birth of Jesus really removes the fear, darkness and death fear from
          our life and gives real joy, happiness and hope to the future to all
          the people who is struggling for life and livelihood every day.
          <br />
          <br />
          The shepherds – oppressed people of the society, the Wiseman – upper
          class of the society (in those days) visited and saw the Birth of
          Jesus and returned with great joy (Matt. 2:10, Lk. 2:20). Here, all
          the people of society (rich and poor) receive the great joy and share
          the same to others while returning.
          <br />
          <br />
          Yes, due to pandemic situation we are also living with death fear, our
          livelihood would also under threat. But the Birth of Jesus brings
          great hope and joy to our present and future like shepherd and Wiseman
          receives great shining light and also we called to share the same joy
          with others in this season.
          <br />
          <br />
          May the birth of Jesus bring the bright future, fearless life and
          great joy to all the people of God in this world. Hence, we called to
          celebrate the Christmas 2020 and New Year 2021 with all the happiness
          in Christ.
        </p>
      </div>
      {/* <div className="verse-strip">
        <p>{bibleVerses[currentVerse]}</p>
      </div> */}
    </main>
  );
};

export default Home;
