import React, { useState } from "react";
import img1 from "./images/1.png";
import img2 from "./images/Main.png";

export default function Love() {
  const [showMessage, setShowMessage] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const loveText = `
Hey bunny…

I want to tell you something from my heart.
From the day we started talking, something in me changed.
Your messages, your smile, your voice, your kindness…
they slowly became the best part of my days.

It just happened… naturally, beautifully.

And now I know it clearly:
I love you, bunny.
Not just a little… but truly, softly, and honestly.

I don’t expect anything from you, but u are mine.
I just wanted you to know what my heart feels. 🤍🐰

And this my proposal my lovely bunny ❤️ 
`;

  return (
    <>
      <div className="love-container">

        {!showMessage && !accepted && (
          <button className="heart-btn" onClick={() => setShowMessage(true)}>
            ❤️ Click My Heart
          </button>
        )}

        {showMessage && !accepted && (
          <div className="love-box">

            {/* Bunny + Bear Images */}
            <div className="img-row">
              <img src={img1} className="love-img" alt="bunny" />
              <img src={img2} className="love-img" alt="bear" />
            </div>

            {loveText}

            <div style={{ marginTop: "25px" }}>
              <button className="accept-btn" onClick={() => setAccepted(true)}>
                Accept[will u be my love?]
              </button>

              <button className="reject-btn">
                Reject
              </button>
            </div>
          </div>
        )}

        {accepted && (
          <h2 className="final-text">
            I love u najma, I am waiting in Insta for your response ❤️
          </h2>
        )}
      </div>

      {/* CSS */}
      <style>{`
         /* Main container */
.love-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  font-family: "Poppins", Arial, sans-serif;
  animation: fadeIn 1s ease-in-out;
}

/* Heart button */
.heart-btn {
  background-color: #ff4d6d;
  color: white;
  padding: 14px 26px;
  font-size: 20px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s;
  box-shadow: 0 4px 12px rgba(255, 0, 72, 0.4);
}

.heart-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 18px rgba(255, 0, 72, 0.6);
}

/* Love paragraph box */
.love-box {
  width: 80%;
  margin-top: 25px;
  padding: 30px;
  border-radius: 20px;
  background: rgba(255, 220, 226, 0.95);
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  white-space: pre-line;
  line-height: 1.7;
  box-shadow: 0 0 22px rgba(255, 140, 160, 0.6);
  animation: popUp 0.5s ease-in-out;
}

/* ==== Image Section ==== */
.img-row {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 25px;

  padding: 15px;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 230, 235, 0.7),
    rgba(255, 200, 215, 0.7)
  );
  backdrop-filter: blur(6px);
  box-shadow: 0 5px 25px rgba(255, 150, 170, 0.3);
}

.love-img {
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 20px;

  /* Soft glow */
  box-shadow: 0 6px 20px rgba(255, 120, 160, 0.30);

  /* Animation */
  animation: softPop 0.6s ease;

  /* Soft border */
  border: 3px solid rgba(255, 200, 210, 0.35);
}


/* Accept button */
.accept-btn {
  background-color: #22c55e;
  color: white;
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 10px rgba(0, 150, 60, 0.3);
}

.accept-btn:hover {
  transform: scale(1.07);
  box-shadow: 0 6px 14px rgba(0, 150, 60, 0.4);
}

/* Reject button */
.reject-btn {
  background-color: #777;
  color: white;
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Final text after accept */
.final-text {
  margin-top: 30px;
  color: #8b2be2;
  font-size: 26px;
  font-weight: bold;
  animation: fadeIn 1s ease-in-out;
}

/* ==== Animations ==== */

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes popUp {
  0% {transform: scale(0.7); opacity: 0;}
  100% {transform: scale(1); opacity: 1;}
}

@keyframes softPop {
  0% {
    transform: scale(0.85);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
      `}</style>
    </>
  );
}
