// src/Components/Game.jsx
import React, { useEffect, useState } from "react";

const PHISH_EXAMPLES = [
  { id: "p1", subject: "Action Required: Confirm Billing Information for Invoice #4821", from: "billing@payments-verify.com", snippet: "Dear Customer, Our records show an issue with your billing details for Invoice #4821. Please review and confirm: https://secure-payments.example/confirm" },
  { id: "p2", subject: "Important: Corporate Security Notice — Account Reverification", from: "security-alerts@corporateverify.com", snippet: "We detected unusual sign-in activity. For your protection, click the link and reverify your corporate credentials immediately: https://verify-corp.example/login" },
  { id: "p3", subject: "Urgent: Delivery Exception — Verify Your Shipping Address", from: "support@parcel-updates.com", snippet: "We attempted to deliver your parcel but the address is incomplete. Verify your details here to avoid shipment return: http://parcel-verify.example/action" },
  { id: "p4", subject: "Payroll: Missing Direct Deposit Information", from: "hr-payroll@yourcompany-payroll.com", snippet: "Payroll team could not process your payment due to missing bank details. Please update securely: https://payroll-update.example/secure" },
];

const SAFE_EXAMPLES = [
  { id: "s1", subject: "Team Calendar: Q3 Planning Meeting", from: "project-manager@company.com", snippet: "Hi team — scheduling the Q3 planning meeting for Tuesday 10am. Please confirm availability and review the attached agenda." },
  { id: "s2", subject: "Monthly Newsletter — Product Updates", from: "news@company.com", snippet: "This month we launched new features. Read the full update on the product blog and see the demo video." },
  { id: "s3", subject: "Invoice Payment Confirmation", from: "billing@trustedvendor.com", snippet: "Thank you — we received payment for invoice INV-1999. Receipt attached for your records." },
  { id: "s4", subject: "Holiday Schedule & Office Closure", from: "hr@company.com", snippet: "Please note the office will be closed on the following dates. Ensure time-off requests are submitted for approval." },
  { id: "s5", subject: "Shared Doc: Project Retrospective Notes", from: "no-reply@clouddocs.com", snippet: "A document has been shared with you: 'Project Retrospective'. Open via your cloud drive. (You have access already.)" },
  { id: "s6", subject: "Security Reminder: Password Rotation Best Practices", from: "it-security@company.com", snippet: "Reminder: rotate passwords every 90 days and enable MFA. See our internal guide for recommended password managers." },
  { id: "s7", subject: "Training Invitation: Accessibility Workshop", from: "learning@company.com", snippet: "You are invited to a short workshop on accessible design. Register to secure a seat." },
];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function Game({ count = 4 }) {
  const visibleCount = Math.max(2, count);
  const [cards, setCards] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [lastResult, setLastResult] = useState(null);
  const [round, setRound] = useState(0);

  useEffect(() => { newRound(); }, [round]);

  function newRound() {
    const phish = shuffle(PHISH_EXAMPLES)[0];
    const safes = shuffle(SAFE_EXAMPLES).slice(0, Math.max(0, visibleCount - 1));
    while (safes.length < visibleCount - 1) safes.push({ ...shuffle(SAFE_EXAMPLES)[0] });
    setCards(shuffle([{ ...phish, isPhish: true }, ...safes.map(s => ({ ...s, isPhish: false }))]));
    setSelectedId(null);
    setSubmitted(false);
    setLastResult(null);
  }

  function handleSelect(id) { if (!submitted) setSelectedId(id); }
  function handleSubmit() {
    if (submitted || selectedId == null) return;
    const chosen = cards.find(c => c.id === selectedId);
    setSubmitted(true);
    setLastResult(chosen?.isPhish ? "correct" : "wrong");
  }
  function handleRetry() { setSelectedId(null); setSubmitted(false); setLastResult(null); }
  function handleNextRound() { setRound(r => r + 1); }

  const correctCard = cards.find(c => c.isPhish);

  return (
    <div style={{ marginTop: 12, width: "100%", fontFamily: "sans-serif" }}>
      <h3 style={{ marginBottom: 8 }}>Spot the Phishing Email — Single Choice</h3>
      <p style={{ marginTop: 0 }}>One of these emails is a phishing attempt. Select <strong>one</strong> card and click <strong>Submit</strong>.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginTop: 12 }}>
        {cards.map(card => {
          const isChosen = selectedId === card.id;
          const isCorrect = submitted && card.isPhish;
          const isWrongPick = submitted && isChosen && !card.isPhish;

          return (
            <div
              key={card.id}
              role="button"
              tabIndex={0}
              onClick={() => handleSelect(card.id)}
              onKeyDown={e => { if (e.key === "Enter" || e.key === " ") handleSelect(card.id); }}
              style={{
                padding: 14, borderRadius: 10, border: "1px solid #e3e8f0",
                boxShadow: "0 2px 6px rgba(16,24,40,0.04)", background: "#fff",
                minHeight: 130, display: "flex", flexDirection: "column", gap: 8,
                cursor: submitted ? "default" : "pointer",
                transform: isChosen ? "translateY(-4px)" : "none",
                outline: isChosen ? "3px solid rgba(0,86,214,0.12)" : "none",
                animation: isCorrect ? "phishSuccess 1.2s ease forwards" : isWrongPick ? "phishWrong 0.8s ease" : "none"
              }}
            >
              <div style={{ fontWeight: 700, color: "#0f172a" }}>{card.subject}</div>
              <div style={{ fontSize: 12, color: "#475569" }}>{card.from}</div>
              <div style={{ fontSize: 13, color: "#0f172a", marginTop: "auto" }}>{card.snippet}</div>

              {submitted && card.isPhish && <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}><span style={{ padding: "6px 10px", borderRadius: 999, background: "#dcfce7", color: "#165c25", fontWeight: 700, fontSize: 12, border: "1px solid #bbf7d0" }}>PHISHING</span></div>}
              {submitted && !card.isPhish && isChosen && <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}><span style={{ padding: "6px 10px", borderRadius: 999, background: "#fff1f2", color: "#991b1b", fontWeight: 700, fontSize: 12, border: "1px solid #fecaca" }}>WRONG</span></div>}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 14, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <button onClick={handleSubmit} disabled={submitted || !selectedId} style={{ padding: "10px 18px", background: submitted ? "#94a3b8" : "#0ea5a4", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: submitted || !selectedId ? "not-allowed" : "pointer" }}>Submit</button>
        <button onClick={handleRetry} disabled={!submitted} style={{ padding: "10px 14px", background: !submitted ? "#94a3b8" : "#f59e0b", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: !submitted ? "not-allowed" : "pointer" }}>Try Again</button>
        <button onClick={handleNextRound} style={{ padding: "10px 14px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>New Round</button>

        <div style={{ marginLeft: "auto", color: "#334155" }}>
          {submitted ? (lastResult === "correct" ? <strong style={{ color: "#16a34a" }}>Correct — well done!</strong> : <strong style={{ color: "#dc2626" }}>Incorrect — review the phishing indicators above.</strong>) : !selectedId ? "Select one email to answer" : "Ready to submit"}
        </div>
      </div>

      {submitted && lastResult === "wrong" && correctCard && (
        <div style={{ marginTop: 12, padding: 12, borderRadius: 8, background: "#fff7ed", border: "1px solid #ffedd5" }}>
          <strong style={{ color: "#b45309" }}>Tip:</strong> The phishing email often contains subtle clues. The phishing email here was: <em style={{ marginLeft: 6 }}>{correctCard.subject}</em>
        </div>
      )}

      <style>{`
        @keyframes phishSuccess {
          0% { box-shadow: 0 0 0 rgba(16,185,129,0); transform: translateY(-2px); }
          40% { box-shadow: 0 8px 30px rgba(16,185,129,0.16); transform: translateY(-6px) scale(1.02); }
          100% { box-shadow: 0 12px 45px rgba(16,185,129,0.12); transform: translateY(-4px); }
        }
        @keyframes phishWrong {
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
