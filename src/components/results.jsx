function Results({ userAnswers, questions, restartQuiz }) {
  function getScore() {
    let score = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === questions[i].answer) {
        score++;
      }
    }
    return score;
  }
  const score = getScore();

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        Your Score: {score}/{questions.length}
      </p>

      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
