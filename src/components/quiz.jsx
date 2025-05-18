import { useState } from "react";
import Results from "./results";

function Quiz() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Saturn"],
      answer: "Jupiter",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Mark Twain",
        "Jane Austen",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Pb", "Fe"],
      answer: "Au",
    },
    {
      question: "What is the most famous library in the world?",
      options: [
        "Library of Alexandria",
        "British Library",
        "New York Public Library",
        "Library of Congress",
      ],
      answer: "Library of Congress",
    },
    {
      question: "What is the most famous song by Taylor Swift?",
      options: [
        "Shake It Off",
        "Blank Space",
        "Love Story",
        "You Belong with Me",
      ],
      answer: "Love Story",
    },
    {
      question: "What is the biggest hit song of Michael Jackson?",
      options: ["Billie Jean", "Thriller", "Beat It", "Smooth Criminal"],
      answer: "Billie Jean",
    },
    {
      question: "What is the capital of India?",
      options: ["New Delhi", "Mumbai", "Kolkata", "Hyderabad"],
      answer: "New Delhi",
    },
    {
      question: "What is the capital of Telangana?",
      options: ["Hyderabad", "Warangal", "Khammam", "Nizamabad"],
      answer: "Hyderabad",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
      answer: "Mount Everest",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
      answer: "Vatican City",
    },
    {
      question: "What is the most populous country in the world?",
      options: ["India", "United States", "China", "Indonesia"],
      answer: "India",
    },
    {
      question: "What is the most beautiful city in the world?",
      options: ["Paris", "Rome", "New York", "Tokyo"],
      answer: "Paris",
    },
    {
      question: "What is the most beautiful place in the world?",
      options: ["Santorini", "Bora Bora", "Maldives", "Hawaii"],
      answer: "Santorini",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const initialAnswers = new Array(15).fill(null);

  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const selectedAnswer = userAnswers[currentQuestionIndex];

  function handleOptionClick(option) {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = option;
    setUserAnswers(updatedAnswers);
  }

  function handleNext() {
    if (currentQuestionIndex === questions.length - 1) {
      setIsQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  function handlePrev() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  function restartQuiz() {
    setUserAnswers(initialAnswers);
    setCurrentQuestionIndex(0);
    setIsQuizCompleted(false);
}

  if (isQuizCompleted) {
    return <Results userAnswers={userAnswers} questions={questions} restartQuiz={restartQuiz} />;
  }

  return (
    <div className="quiz">
      <p className="question">
        {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
      </p>
      <div className="options">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            className={
              "option" + (selectedAnswer === option ? " selected" : "")
            }
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="nav-buttons">
        <button
          className="prev-button"
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className="next-button"
          onClick={handleNext}
          disabled={!selectedAnswer}
        >
          {currentQuestionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
