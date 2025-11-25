import React, { useState, useRef, useEffect } from "react";

export default function Love() {
  const [showMessage, setShowMessage] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [hearts, setHearts] = useState([]);

  const msgRef = useRef(null);

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

I don’t expect anything from you,
I just wanted you to know what my heart feels. 🤍🐰
`;


  // Spawn hearts from the message box area
  useEffect(() => {
    if (showMessage && msgRef.current) {
      const rect = msgRef.current.getBoundingClientRect();

      const newHearts = [];
      for (let i = 0; i < 50; i++) {
        newHearts.push({
          id: Date.now() + i,
          left: rect.left + Math.random() * rect.width,
          top: rect.top + 20, // just under the top edge
          size: Math.random() * 18 + 18,
          duration: Math.random() * 2 + 2
        });
      }

      setHearts(newHearts);

      setTimeout(() => setHearts([]), 4000);
    }
  }, [showMessage]);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        fontFamily: "Arial",
        paddingTop: "50px",
      }}
    >
      {/* Falling hearts */}
      {hearts.map((h) => (
        <span
          key={h.id}
          style={{
            position: "fixed",
            left: h.left + "px",
            top: h.top + "px",
            fontSize: h.size + "px",
            color: "red",
            animation: `fall ${h.duration}s linear forwards`,
            pointerEvents: "none",
            zIndex: 9999
          }}
        >
          ❤️
        </span>
      ))}

      {/* Initial button */}
      {!showMessage && !accepted && (
        <button
          onClick={() => setShowMessage(true)}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "14px 24px",
            fontSize: "20px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer"
          }}
        >
          ❤️ Click My Heart
        </button>
      )}

      {/* Love message */}
      {showMessage && !accepted && (
        <div
          ref={msgRef}
          style={{
            width: "85%",
            margin: "30px auto",
            padding: "40px",
            borderRadius: "20px",
            background: "#ffe6e6",
            whiteSpace: "pre-line",
            fontSize: "22px",
            boxShadow: "0 0 15px pink",
            position: "relative",
            zIndex: 10
          }}
        >
          {loveText}

          <div style={{ marginTop: "30px" }}>
            <button
              onClick={() => setAccepted(true)}
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "12px 22px",
                marginRight: "10px",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                cursor: "pointer"
              }}
            >
              Accept
            </button>

            <button
              style={{
                backgroundColor: "grey",
                color: "white",
                padding: "12px 22px",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                cursor: "not-allowed"
              }}
            >
              Reject
            </button>
          </div>
        </div>
      )}

      {/* After accept */}
      {accepted && (
        <h1 style={{ color: "purple", marginTop: "40px" }}>
          I am waiting in Insta for your response ❤️
        </h1>
      )}

      {/* Animation */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(300px); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
