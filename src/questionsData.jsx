// src/Components/questions.jsx

const questionsData = [
  {
    question: "Which of the following is a sign of a phishing email?",
    options: [
      "Unknown sender with urgent message",
      "Email from your friend",
      "A message from your saved contact",
      "Official mail from your company",
    ],
    correct: 0,
  },
  {
    question: "What should you do if you suspect a phishing link?",
    options: [
      "Click and check where it goes",
      "Hover to inspect URL and report it",
      "Forward to others",
      "Ignore and delete immediately",
    ],
    correct: 1,
  },
  {
    question: "Which is the best way to protect yourself from phishing?",
    options: [
      "Use two-factor authentication",
      "Share passwords with friends",
      "Click all links in emails",
      "Turn off your antivirus",
    ],
    correct: 0,
  },
  {
    question: "Phishing emails often try to create a sense of ______.",
    options: ["Urgency", "Relaxation", "Boredom", "Excitement"],
    correct: 0,
  },
  {
    question: "What should you do after identifying a phishing email?",
    options: [
      "Report to IT/security team",
      "Reply and ask who they are",
      "Forward to your contacts",
      "Ignore it completely",
    ],
    correct: 0,
  },
  {
    question: "What is 'spear phishing'?",
    options: [
      "Targeted phishing towards a specific person or group",
      "Mass email scam to everyone",
      "Fishing in the sea",
      "A spam message",
    ],
    correct: 0,
  },
  {
    question: "What is the main goal of phishing?",
    options: [
      "To obtain sensitive information",
      "To play games",
      "To entertain users",
      "To clean your mailbox",
    ],
    correct: 0,
  },
  {
    question: "Which file type might contain phishing malware?",
    options: [".exe", ".txt", ".jpg", ".mp3"],
    correct: 0,
  },
  {
    question: "What is the first step if you click a phishing link?",
    options: [
      "Disconnect internet and report immediately",
      "Ignore it",
      "Keep browsing normally",
      "Restart your system",
    ],
    correct: 0,
  },
  {
    question: "Which protocol is safer for websites?",
    options: ["HTTPS", "HTTP", "FTP", "SMTP"],
    correct: 0,
  },
  {
    question: "Phishing websites often have URLs that are ______.",
    options: [
      "Similar but slightly different from real sites",
      "Exactly the same as official sites",
      "Always government domains",
      "Very long and secure",
    ],
    correct: 0,
  },
  {
    question: "Which one is an example of a phishing message?",
    options: [
      "‘Your account will be locked! Click here to verify.’",
      "‘Hello, just checking in.’",
      "‘Meeting tomorrow at 10.’",
      "‘See attached birthday photos.’",
    ],
    correct: 0,
  },
  {
    question: "Vishing refers to phishing done via ______.",
    options: ["Phone calls", "Emails", "SMS", "Websites"],
    correct: 0,
  },
  {
    question: "Smishing refers to phishing through ______.",
    options: ["Text messages (SMS)", "Social media", "Voice calls", "USB drives"],
    correct: 0,
  },
  {
    question: "What is a good way to verify a suspicious email?",
    options: [
      "Contact the company directly using official website info",
      "Click reply and ask for details",
      "Forward to your friends",
      "Ignore it",
    ],
    correct: 0,
  },
  {
    question: "Phishing can also occur through ______.",
    options: ["Fake login pages", "Mobile apps", "Social media DMs", "All of the above"],
    correct: 3,
  },
  {
    question: "A common phishing tactic is asking you to ______.",
    options: [
      "Confirm account details urgently",
      "Take a short survey for fun",
      "Play a game",
      "Join a webinar",
    ],
    correct: 0,
  },
  {
    question: "Phishing attacks can target ______.",
    options: ["Anyone with an email or phone", "Only banks", "Only students", "Only government employees"],
    correct: 0,
  },
  {
    question: "A fake website might use which trick?",
    options: [
      "Extra characters in URL (e.g., faceb00k.com)",
      "HTTPS with a green padlock",
      "Ads on top banner",
      "Clear design",
    ],
    correct: 0,
  },
  {
    question: "Phishing emails may contain attachments like ______.",
    options: [
      ".zip or .exe files",
      ".png files",
      ".pdf study material",
      ".mp3 songs",
    ],
    correct: 0,
  },
  {
    question: "What should you avoid entering on public Wi-Fi?",
    options: [
      "Passwords and banking details",
      "Search queries",
      "Movie names",
      "Weather updates",
    ],
    correct: 0,
  },
  {
    question: "Why do phishing emails often have spelling mistakes?",
    options: [
      "To filter out cautious users",
      "By accident",
      "To save typing time",
      "Because attackers are lazy",
    ],
    correct: 0,
  },
  {
    question: "Which of these is *not* a phishing attack?",
    options: [
      "Email asking to confirm account",
      "Fake tech support call",
      "Installing security patches",
      "Fake bank alert SMS",
    ],
    correct: 2,
  },
  {
    question: "Which department usually handles phishing incidents?",
    options: ["IT/Security team", "HR", "Finance", "Marketing"],
    correct: 0,
  },
  {
    question: "A phishing website might copy the ______ of real sites.",
    options: ["Logo and design", "Server IP", "Firewall", "Data center"],
    correct: 0,
  },
  {
    question: "Multi-Factor Authentication helps prevent phishing by ______.",
    options: [
      "Adding extra verification like OTP",
      "Blocking emails",
      "Changing passwords randomly",
      "Encrypting files",
    ],
    correct: 0,
  },
  {
    question: "One-time passwords (OTPs) are sent for ______.",
    options: [
      "Verifying identity",
      "Entertainment",
      "Gaming rewards",
      "Music downloads",
    ],
    correct: 0,
  },
  {
    question: "Phishing mainly relies on ______.",
    options: [
      "Human error and trust",
      "System vulnerabilities",
      "Firewall bypass",
      "Hardware damage",
    ],
    correct: 0,
  },
  {
    question: "An email attachment should be opened only if ______.",
    options: [
      "You trust the sender and expect it",
      "It looks interesting",
      "It’s large in size",
      "It’s from an unknown contact",
    ],
    correct: 0,
  },
  {
    question: "Browser extensions can help by ______.",
    options: [
      "Detecting malicious links",
      "Changing background color",
      "Speeding up downloads",
      "Sending alerts",
    ],
    correct: 0,
  },
  {
    question: "What is the safest response to a suspicious login request?",
    options: [
      "Do not click — visit the site manually",
      "Click and check",
      "Forward it",
      "Reply with credentials",
    ],
    correct: 0,
  },
  {
    question: "How often should you change passwords?",
    options: [
      "Every 3–6 months",
      "Once in 5 years",
      "Never",
      "Whenever bored",
    ],
    correct: 0,
  },
  {
    question: "What can help identify phishing websites quickly?",
    options: ["Browser security warnings", "Color of buttons", "Font style", "Image size"],
    correct: 0,
  },
  {
    question: "If a pop-up says ‘You won a prize!’, what should you do?",
    options: [
      "Close it immediately",
      "Enter your info",
      "Share with friends",
      "Click for fun",
    ],
    correct: 0,
  },
  {
    question: "Which is the least likely target for phishing?",
    options: ["A locked computer system", "An email account", "A bank login", "A student portal"],
    correct: 0,
  },
  {
    question: "Fake social media profiles can be used for ______.",
    options: [
      "Gathering personal data for phishing",
      "Making memes",
      "Improving design",
      "Playing games",
    ],
    correct: 0,
  },
  {
    question: "Which of these is a red flag?",
    options: [
      "‘Dear Customer, your account is in danger!’",
      "‘Happy weekend!’",
      "‘Meeting rescheduled to Monday.’",
      "‘Lunch menu update.’",
    ],
    correct: 0,
  },
  {
    question: "Phishing links often use shortened URLs to ______.",
    options: [
      "Hide the real domain name",
      "Make it look clean",
      "Reduce size",
      "Improve SEO",
    ],
    correct: 0,
  },
  {
    question: "Phishing awareness training helps users to ______.",
    options: [
      "Recognize and avoid fake emails",
      "Create phishing sites",
      "Block antivirus",
      "Hack networks",
    ],
    correct: 0,
  },
  {
    question: "How can you double-check email authenticity?",
    options: [
      "Check sender address carefully",
      "Click all links",
      "Ignore it",
      "Reply and ask",
    ],
    correct: 0,
  },
  {
    question: "Phishing may also appear as ______.",
    options: [
      "Fake browser pop-ups",
      "System updates",
      "Normal ads",
      "Background notifications",
    ],
    correct: 0,
  },
  {
    question: "Which is an advanced phishing technique?",
    options: [
      "Clone phishing",
      "Watermark phishing",
      "Linkless phishing",
      "Audio phishing",
    ],
    correct: 0,
  },
  {
    question: "Why should you not reuse passwords?",
    options: [
      "If one site is hacked, others become vulnerable",
      "Because it’s boring",
      "Because sites delete them",
      "Because browsers block them",
    ],
    correct: 0,
  },
  {
    question: "Which of these is a safe practice?",
    options: [
      "Using a password manager",
      "Saving passwords on sticky notes",
      "Sharing with friends",
      "Using ‘12345’",
    ],
    correct: 0,
  },
  {
    question: "Emails with fake ‘invoice attachments’ are often ______.",
    options: ["Phishing attempts", "Spam filters", "Newsletters", "Reminders"],
    correct: 0,
  },
  {
    question: "Which of these cannot be used in phishing?",
    options: ["Encrypted QR codes", "Emails", "SMS", "Calls"],
    correct: 0,
  },
  {
    question: "Phishing often uses fake ______ to look legitimate.",
    options: ["Logos and domains", "Videos", "Memes", "Games"],
    correct: 0,
  },
  {
    question: "How does a phishing scam usually end?",
    options: [
      "User gives away credentials",
      "System speed increases",
      "User earns rewards",
      "Internet becomes faster",
    ],
    correct: 0,
  },
  {
    question: "Which of these subjects is likely phishing?",
    options: [
      "‘Immediate Action Required: Verify Your Account!’",
      "‘Lunch menu updated’",
      "‘Meeting at 4 PM’",
      "‘Reminder: Homework due’",
    ],
    correct: 0,
  },
  {
    question: "What’s a common fake message from attackers?",
    options: [
      "‘Your password will expire soon’",
      "‘We value your privacy’",
      "‘Welcome to our website’",
      "‘Meeting reminder’",
    ],
    correct: 0,
  },
];

export default questionsData;
