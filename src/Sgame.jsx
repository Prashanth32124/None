// sgame.jsx — Scenario Game (One Question Per Round)
// Card-based UI similar to phishing game

import React, { useState, useMemo } from "react";
import Socialdata from "./Socialdata.jsx";

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function SGame() {
  const [round, setRound] = useState(0);
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2 style={{ fontSize: 28, marginBottom: 10 }}>Social Engineering Scenario Game</h2>
      <p style={{ marginTop: 0 }}>Select the correct safe action for this scenario.</p>
      <ScenarioRound key={round} onNext={() => setRound(r => r + 1)} />
    </div>
  );
}

function ScenarioRound({ onNext }) {
  const question = useMemo(() => shuffle(Socialdata)[0], []);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function submit() {
    if (selected == null) return;
    setSubmitted(true);
  }

  const isCorrect = submitted && selected === question.correct;
  const isWrong = submitted && selected !== question.correct;

  return (
    <div style={{ marginTop: 12 }}>
      <h3 style={{ marginBottom: 12 }}>{question.question}</h3>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
        {question.options.map((op, idx) => {
          const chosen = selected === idx;
          const correct = submitted && idx === question.correct;
          const wrongPick = submitted && chosen && idx !== question.correct;

          return (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              onClick={() => !submitted && setSelected(idx)}
              onKeyDown={e => { if (!submitted && (e.key === "Enter" || e.key === " ")) setSelected(idx); }}
              style={{
                padding: 16,
                borderRadius: 10,
                border: "1px solid #cbd5e1",
                background: "#fff",
                cursor: submitted ? "default" : "pointer",
                transform: chosen ? "translateY(-4px)" : "none",
                outline: chosen ? "3px solid rgba(0,86,214,0.12)" : "none",
                animation: correct ? "scCorrect 1s ease forwards" : wrongPick ? "scWrong 0.8s ease" : "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 600 }}>{op}</div>

              {correct && (
                <div style={{ marginTop: 8, textAlign: "right" }}>
                  <span style={{ background: "#dcfce7", color: "#166534", padding: "6px 10px", borderRadius: 20, fontWeight: 700, fontSize: 12 }}>CORRECT</span>
                </div>
              )}

              {wrongPick && (
                <div style={{ marginTop: 8, textAlign: "right" }}>
                  <span style={{ background: "#fee2e2", color: "#991b1b", padding: "6px 10px", borderRadius: 20, fontWeight: 700, fontSize: 12 }}>WRONG</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
        <button
          onClick={submit}
          disabled={submitted || selected == null}
          style={{ padding: "10px 18px", background: submitted ? "#94a3b8" : "#0284c7", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: submitted || selected == null ? "not-allowed" : "pointer" }}
        >Submit</button>

        {submitted && (
          <button
            onClick={onNext}
            style={{ padding: "10px 18px", background: "#16a34a", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}
          >Next Scenario</button>
        )}
      </div>

      {isWrong && (
        <div style={{ marginTop: 16, padding: 14, borderRadius: 8, background: "#fff7ed", border: "1px solid #ffedd5" }}>
          <strong style={{ color: "#b45309" }}>Correct Answer: {question.options[question.correct]}</strong>
        </div>
      )}

      <style>{`
        @keyframes scCorrect {
          0% { box-shadow: 0 0 0 rgba(16,185,129,0); transform: translateY(-2px); }
          40% { box-shadow: 0 8px 25px rgba(16,185,129,0.18); transform: translateY(-6px) scale(1.03); }
          100% { box-shadow: 0 12px 35px rgba(16,185,129,0.12); transform: translateY(-4px); }
        }
        @keyframes scWrong {
          0% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(2px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}