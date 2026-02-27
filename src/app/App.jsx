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
    loading
  } = useExercise("basic");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>English Vocabulary Trainer</h1>

      {currentWord && (
        <div>
          <p>Select the correct word:</p>
          
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedOption(option)}
              style={{
                display: "block",
                margin: "10px 0",
                background:
                  selectedOption?.id === option.id ? "#CCC" : "white",
              }}
            >
              {option.word}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App