import { useEffect, useState } from "react";
import { VocabularyService } from "../features/vocabulary/vovaculary.service"

export function useExercise(level = "basic") {
    const [words, setWords] = useState([]);
    const [currentWord, setCurrentWord] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadWords() {
            setLoading(true);
            const data = await VocabularyService.getWordsByLevel(level);
            setWords(data);
            setCurrentWord(data[0] || null);
            setLoading(false)
        }

        loadWords();
    }, [level]);

    return {
        words,
        currentWord,
        loading
    };
}