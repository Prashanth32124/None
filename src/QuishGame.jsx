// QuishGame.jsx — Advanced QR Quishing Simulator (Dark Neon Cyber Theme)
// Auto-generates QR using "qrcode" library + inline styles only

import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import translations from "./Trans";

export default function QuishGame() {
  const [qr, setQR] = useState("");
  const [message, setMessage] = useState("");
  const [url, setURL] = useState("");
  const [difficulty, setDifficulty] = useState("Hard");
  const [isMalicious, setIsMalicious] = useState(false);
  const [choice, setChoice] = useState(null);
  const [submitted, setSubmitted] = useState(false);
const [timer, setTimer] = useState(20);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lang, setLang] = useState("en");
const t = translations[lang];


  // Generate random URL based on difficulty
  function generateURL() {
    const legitDomains = [
      "https://parcel-delivery.com",
      "https://company-survey.com",
      "https://secure-payments.com",
      "https://menu.restaurant.com",
    ];

    const maliciousDomains = [
      "http://parcel-secure-update-login.ru",
      "https://pay-verify-secure-login.xyz",
      "https://company-survey-info-security-login.site",
      "http://scannow-payment-check.in.net",
      "http://restaurant-menu-update-secure.cc",
      "https://upi-update-security-payment.co",
    ];

    const msgList = [
      "Scan to verify your parcel delivery",
      "Your SIM will be deactivated — scan to update KYC",
      "Scan to complete UPI verification",
      "Parking fine pending — scan to pay",
      "Company survey — scan to participate",
      "Scan to view new office schedule",
    ];

    const malicious = Math.random() < 0.55; // 55% chance phishing
    setIsMalicious(malicious);

    const chosenURL = malicious
      ? maliciousDomains[Math.floor(Math.random() * maliciousDomains.length)]
      : legitDomains[Math.floor(Math.random() * legitDomains.length)];

    setURL(chosenURL);
    setMessage(msgList[Math.floor(Math.random() * msgList.length)]);
  }

  // Generate QR with URL
  async function generateQR() {
    await generateURL();

    QRCode.toDataURL(url, { width: 260 }, (err, img) => {
      if (err) console.error(err);
      else setQR(img);
    });
  }

  // Start new round
  function nextRound() {
    setSubmitted(false);
    setChoice(null);
    setTimer(20); 
    generateQR();
  }

  // Timer countdown
  useEffect(() => {
    generateQR(); // first round
  }, []);

  useEffect(() => {
    if (submitted) return;

    if (timer === 0) {
      setSubmitted(true);
      setChoice("timeout");
      setStreak(0);
      return;
    }

    const id = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(id);
  }, [timer, submitted]);

  // Submit answer
  function submit() {
    if (!choice) return;

    const correct = (choice === "malicious" && isMalicious) || (choice === "safe" && !isMalicious);

    setSubmitted(true);

    if (correct) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  }

  // 🎨 Dark Cyber Security Theme Styles
  const styles = {
    page: {
      background: "#0a0f1e",
      color: "#c9d1d9",
      minHeight: "100vh",
      padding: "24px",
      fontFamily: "monospace",
      textAlign: "center",
    },
    card: {
      background: "rgba(0,0,0,0.4)",
      border: "1px solid rgba(0,255,255,0.2)",
      borderRadius: "12px",
      padding: "20px",
      maxWidth: "380px",
      margin: "20px auto",
      boxShadow: "0 0 18px rgba(0,255,255,0.12)",
    },
    button: {
      padding: "10px 20px",
      margin: "8px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontWeight: "700",
      color: "#fff",
      fontSize: "15px",
    },
    safeBtn: {
      background: "#16a34a",
    },
    malBtn: {
      background: "#dc2626",
    },
    hintBtn: {
      background: "#2563eb",
    },
    nextBtn: {
      marginTop: "10px",
      background: "#14b8a6",
    },
    timer: {
      fontSize: "20px",
      marginTop: "8px",
      color: timer <= 3 ? "#ff4444" : "#38bdf8",
    },
    resultCorrect: {
      marginTop: "12px",
      color: "#4ade80",
      fontWeight: "bold",
      fontSize: "18px",
    },
    resultWrong: {
      marginTop: "12px",
      color: "#f87171",
      fontWeight: "bold",
      fontSize: "18px",
    },
    neonLine: {
      height: "2px",
      marginTop: "8px",
     width: `${(timer / 20) * 100}%`,
      background: timer <= 3 ? "#ff4444" : "#38bdf8",
      transition: "0.3s",
    },
  };

  return (
  <div style={styles.page}>

    {/* Language Selector */}
    <select 
      value={lang} 
      onChange={(e) => setLang(e.target.value)}
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        padding: "6px 10px",
        borderRadius: "6px",
        background: "#1e293b",
        color: "#fff",
        border: "1px solid #38bdf8"
      }}
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
      <option value="te">తెలుగు</option>
    </select>

    {/* Title */}
    <h1 style={{ color: "#38bdf8", marginBottom: 10 }}>{t.title}</h1>
    <p style={{ color: "#7dd3fc" }}>{t.subtitle}</p>

    {/* Timer */}
    <div style={styles.timer}>⏱ {t.timeLeft}: {timer}s</div>
    <div style={styles.neonLine}></div>

    {/* Card */}
    <div style={styles.card}>
      <img 
        src={qr} 
        alt="QR Code" 
        style={{ width: "260px", marginBottom: "12px" }} 
      />

      <p style={{ color: "#93c5fd" }}>{message}</p>

      {!submitted && (
        <>
          <button
            style={{ ...styles.button, ...styles.safeBtn }}
            onClick={() => setChoice("safe")}
          >
            {t.safe}
          </button>

          <button
            style={{ ...styles.button, ...styles.malBtn }}
            onClick={() => setChoice("malicious")}
          >
            {t.malicious}
          </button>

          <button
            style={{ ...styles.button, ...styles.hintBtn }}
            onClick={() => alert("URL: " + url)}
          >
            {t.showHint}
          </button>

          <button
            style={{ ...styles.button, background: "#6366f1" }}
            onClick={submit}
            disabled={!choice}
          >
            {t.submit}
          </button>
        </>
      )}

      {submitted && (
        <>
          {choice === "timeout" ? (
            <div style={styles.resultWrong}>
              ❌ Time's up!
              <p>{isMalicious ? t.malicious : t.safe}</p>
            </div>
          ) : (choice === "malicious" && isMalicious) ||
            (choice === "safe" && !isMalicious) ? (
            <div style={styles.resultCorrect}>✔ Correct!</div>
          ) : (
            <div style={styles.resultWrong}>
              ❌ Wrong!<br />
              {isMalicious ? t.malicious : t.safe}<br />
              <small style={{ color: "#fca5a5" }}>{url}</small>
            </div>
          )}

          <button
            style={{ ...styles.button, ...styles.nextBtn }}
            onClick={nextRound}
          >
            {t.next}
          </button>
        </>
      )}
    </div>

    {/* Score & Streak */}
    <div style={{ marginTop: 20, color: "#93c5fd" }}>
      Score: {score} | Streak: ⚡ {streak}
    </div>

  </div>
);

}
