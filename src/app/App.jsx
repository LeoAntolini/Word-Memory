import { VocabularyService } from "../features/vocabulary/vovaculary.service"
import { useEffect } from 'react'
import './App.css'
import { useExercise } from "../hooks/useExercise"

function App() {

  const {
    currentWord,
    options,
    selectedOption,
    setSelectedOption,
    loading,
    isAnswered,
    isCorrect,
    checkAnswer,
    nextQuestion,
    score
  } = useExercise("basic");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>English Vocabulary Trainer</h1>
      <h2>Score: {score}</h2>

      {currentWord && (
        <div>
          <p>Select the correct word:</p>

          {options.map((option) => {
            const isSelected = selectedOption?.id === option.id;
            const isRight = option.id === currentWord.id;

            return (
              <button
                key={option.id}
                disabled={isAnswered}
                onClick={() => setSelectedOption(option)}
                style={{
                  display: "block",
                  margin: "10px 0",
                  background: isAnswered
                    ? isRight
                      ? "#4CAF50"
                      : isSelected
                        ? "#F44336"
                        : "white"
                    : isSelected
                      ? "#CCC"
                      : "white",
                  color: isAnswered && isRight ? "white" : "black"
                }}>
                {option.word}
              </button>
            );
          })}

          {!isAnswered && (
            <button
              onClick={checkAnswer}
              disabled={!selectedOption}
            >
              Confirm
            </button>
          )}

          {isAnswered && (
            <div>
              <p>
                {isCorrect ? "✅ Correct!" : "❌ Wrong answer"}
              </p>
              <button onClick={nextQuestion}>
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App