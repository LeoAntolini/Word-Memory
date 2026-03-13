import { VocabularyService } from "../features/vocabulary/services/vocabulary.service"
import { useEffect } from 'react'
import './App.css'
import { useExercise } from "../features/vocabulary/hooks/useExercise"
import { speakWord } from "../shared/utils/speakWord"

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
    score,
    isFinished,
    words
  } = useExercise("basic");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isFinished) {
    const percentage = Math.round((score / words.length) * 100);

    return (
      <div>
        <h1>Exercise Finished 🎉</h1>
        <h2>Final Score: {score} / {words.length}</h2>
        <h3>Accuracy: {percentage}%</h3>
      </div>
    )
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
                onClick={() => {
                  setSelectedOption(option)
                  speakWord(option.word)
                }}
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