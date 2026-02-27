import { VocabularyService } from "../features/vocabulary/vovaculary.service"
import { useEffect } from 'react'
import './App.css'
import { useExercise } from "../hooks/useExercise"

function App() {

  useEffect(() => {
    async function load() {
      const words = await VocabularyService.getWordsByLevel("basic")
      console.log(words)
    }
   load() 
  }, [])

  const { currentWord, loading } = useExercise("basic");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>English Vocabulary Trainer</h1>
      {currentWord && (
        <div>
          <p>Word:</p>
          <h2>{currentWord.word}</h2>
        </div>
      )}
    </div>
  );
}

export default App