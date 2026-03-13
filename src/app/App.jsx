import { VocabularyService } from "../features/vocabulary/services/vocabulary.service"
import { useEffect } from 'react'
import './App.css'
import { useExercise } from "../features/vocabulary/hooks/useExercise"
import { speakWord } from "../shared/utils/speakWord"
import { OptionButton } from "../features/vocabulary/components/OptionButton"
import { ExerciseCard } from "../features/vocabulary/components/ExerciseCard"

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

          <ExerciseCard
            currentWord={currentWord}
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            isAnswered={isAnswered}
          />

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