import React, { useState } from "react";
import "./CSS/Phishingattack.css";
import questionsData from "./questionsData"; // your 50-question file
import PhishingAttackMatter from "./PhishingAttackMatter";
function Phishingattack() {
  // helper to pick random unique questions
  const getRandomQuestions = (count) =>
    [...questionsData].sort(() => Math.random() - 0.5).slice(0, count);

  // preload quizzes
  const [subQuizzes] = useState([
    getRandomQuestions(4),
    getRandomQuestions(4),
    getRandomQuestions(4),
    getRandomQuestions(4),
  ]);
  const [finalQuiz] = useState(getRandomQuestions(10));

  // quiz state
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [completedSubQuizzes, setCompletedSubQuizzes] = useState(0);

  // start a quiz
  const startQuiz = (type, index = null) => {
    if (type === "sub" && index > completedSubQuizzes) return; // lock
    const quiz = type === "final" ? finalQuiz : subQuizzes[index];
    setActiveQuiz({ type, index, quiz });
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowScore(false);
  };

  const handleAnswer = (optionIndex) => setSelected(optionIndex);

  const nextQuestion = () => {
    if (!activeQuiz) return;

    if (selected === activeQuiz.quiz[current].correct) setScore((s) => s + 1);

    const next = current + 1;
    if (next < activeQuiz.quiz.length) {
      setCurrent(next);
      setSelected(null);
    } else {
      setShowScore(true);
      // mark subquiz as completed
      if (activeQuiz.type === "sub") {
        setCompletedSubQuizzes((prev) =>
          Math.max(prev, (activeQuiz.index ?? 0) + 1)
        );
      }
    }
  };

  const retryQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowScore(false);
  };

  // Quiz UI block
  const QuizBlock = ({ containerKey }) => {
    if (!activeQuiz) return null;

    if (showScore) {
      return (
        <div className="score-section internal">
          <h4>
            🎯 Your Score: {score}/{activeQuiz.quiz.length}
          </h4>
          <p>
            {score === activeQuiz.quiz.length
              ? "Excellent! You're phishing-proof 🛡️"
              : "Good try — review and retry!"}
          </p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
            <button className="restart-btn" onClick={retryQuiz}>
              Retry
            </button>
            <button
              className="restart-btn"
              onClick={() => setActiveQuiz(null)}
            >
              Close
            </button>
          </div>
        </div>
      );
    }

    const q = activeQuiz.quiz[current];

    return (
      <div className="quiz-section internal">
        <h4>
          Q{current + 1}. {q.question}
        </h4>
        <form>
          {q.options.map((opt, i) => (
            <label key={i} className="option-label">
              <input
                type="radio"
                name={`quiz-option-${containerKey}`}
                checked={selected === i}
                onChange={() => handleAnswer(i)}
              />
              {opt}
            </label>
          ))}
        </form>
        <button
          className="next-btn"
          onClick={nextQuestion}
          disabled={selected === null}
        >
          {current === activeQuiz.quiz.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    );
  };

  return (
    <div className="courses-page">
      <h1 className="title">Phishing Attacks</h1>

      <div className="courses-row">
        {/* 1️⃣ Video */}
        <div className="course-box">
          <h2>Introduction Video</h2>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XBkzBrXlle0?rel=0&modestbranding=1&autoplay=0&controls=1&loop=1&playlist=XBkzBrXlle0"
              frameBorder="0"
              allowFullScreen
              title="Phishing Video"
            />
          </div>
        </div>

        {/* 2️⃣ Matter */}
        <div className="course-box">
          <h2>Matter to Study</h2>
           <PhishingAttackMatter />
        </div>

        {/* 3️⃣ Sub-Quizzes */}
        <div className="course-box">
          <h2>Additional Learning</h2>
          <p>Complete sub-quizzes in order:</p>
          <div className="subquiz-buttons">
            {subQuizzes.map((quiz, index) => {
              const locked = index > completedSubQuizzes;
              const isActive =
                activeQuiz && activeQuiz.type === "sub" && activeQuiz.index === index;
              return (
                <div key={index} style={{ marginBottom: 12 }}>
                  <button
                    className="quiz-btn"
                    disabled={locked}
                    onClick={() => startQuiz("sub", index)}
                  >
                    {locked
                      ? `🔒 Sub Quiz ${index + 1}`
                      : isActive
                      ? `In Progress: Sub Quiz ${index + 1}`
                      : `Start Sub Quiz ${index + 1}`}
                  </button>
                  {completedSubQuizzes > index && (
                    <span style={{ color: "green", marginLeft: 8 }}>✓ Completed</span>
                  )}
                  {isActive && <QuizBlock containerKey={`sub-${index}`} />}
                </div>
              );
            })}
          </div>
          <p>
            Progress: {completedSubQuizzes}/{subQuizzes.length} sub-quizzes
            completed
          </p>
        </div>

        {/* 4️⃣ Final Quiz */}
        <div className="course-box">
          <h2>Final Quiz</h2>
          <button
            className="quiz-btn"
            disabled={completedSubQuizzes < subQuizzes.length}
            onClick={() => startQuiz("final")}
          >
            {completedSubQuizzes < subQuizzes.length
              ? "🔒 Complete all sub-quizzes first"
              : "Start Final Quiz"}
          </button>
          {activeQuiz && activeQuiz.type === "final" && (
            <QuizBlock containerKey="final" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Phishingattack;
