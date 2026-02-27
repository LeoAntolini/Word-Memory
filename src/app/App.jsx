import { VocabularyService } from "../features/vocabulary/vovaculary.service"
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    async function load() {
      const words = await VocabularyService.getWordsByLevel("basic")
      console.log(words)
    }
   load() 
  }, [])

  return <h1>English Vocabulary Trainer</h1>
}

export default App