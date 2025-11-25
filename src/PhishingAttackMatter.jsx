import React from "react";
import "./CSS/Phishingattack.css";

function PhishingAttackMatter() {
  const topics = [
    {
      title: "Introduction to Phishing",
      content: [
        "Phishing is a social engineering attack where attackers impersonate trusted entities to trick victims into revealing sensitive information.",
        "It leverages human psychology — urgency, fear, curiosity, or authority — rather than purely technical exploits.",
        "Modern phishing campaigns are often highly targeted and difficult to detect."
      ]
    },
    {
      title: "Types of Phishing",
      content: [
        "Email Phishing — attackers send emails appearing from trusted sources, asking for credentials or directing to fake login pages.",
        "Spear Phishing — targeted attacks aimed at specific individuals or groups using personalized messages.",
        "Whaling — phishing aimed at high-value targets, often executives or financial officers.",
        "Smishing — phishing via SMS with malicious links or requests for sensitive replies.",
        "Vishing — voice calls used to trick targets into revealing information.",
        "Clone Phishing — attackers copy legitimate emails and replace links/attachments with malicious ones.",
        "Business Email Compromise (BEC) — attackers spoof corporate emails to request sensitive data or fund transfers."
      ]
    },
    {
      title: "Practical Checklist for Individuals",
      content: [
        "Do not click suspicious links.",
        "Hover over links to inspect URLs.",
        "Verify the sender using another channel.",
        "Report suspicious emails to IT/security.",
        "Delete any confirmed phishing emails immediately."
      ]
    },
    {
      title: "Checklist for Security Admins",
      content: [
        "Enforce multi-factor authentication (MFA).",
        "Configure SPF, DKIM, and DMARC for email security.",
        "Deploy advanced mail filters and monitor suspicious activity.",
        "Run phishing simulations and provide user training.",
        "Monitor for domain squatting and impersonation attempts."
      ]
    },
    {
      title: "Tools & Technologies",
      content: [
        "Email gateways with advanced threat protection.",
        "Link and attachment sandboxing.",
        "Endpoint protection platforms (EPP/EDR).",
        "Web proxies and URL-rewriting features.",
        "Security Information and Event Management (SIEM) systems.",
        "Threat intelligence feeds for domain and IP reputation."
      ]
    }
  ];

  return (
    <div className="study-content matter-scroll">
      {topics.map((topic, idx) => (
        <div key={idx} style={{ marginBottom: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>{topic.title}</h3>
          {topic.content.map((line, i) => (
            <p key={i} style={{ marginBottom: "8px" }}>
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PhishingAttackMatter;
