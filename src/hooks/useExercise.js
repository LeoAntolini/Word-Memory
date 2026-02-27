import { useEffect, useState } from "react";
import { VocabularyService } from "../features/vocabulary/vovaculary.service"
import { shuffle } from "../utils/shuffle";

export function useExercise(level = "basic") {
    const [words, setWords] = useState([]);
    const [currentWord, setCurrentWord] = useState(null);
    const [loading, setLoading] = useState(true);

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        async function loadWords() {
            setLoading(true);
            const data = await VocabularyService.getWordsByLevel(level);
            setWords(data);
            
            if (data.length > 0) {
                const correct = data[0];

                const wrongOptions = data
                    .filter((word) => word.id !== correct.id)
                    .slice(0, 3);

                const allOptions = shuffle([correct, ...wrongOptions]);

                setCurrentWord(correct);
                setOptions(allOptions);
            }

            setLoading(false)
        }

        loadWords();
    }, [level]);

    function checkAnswer() {
        if (!selectedOption) return;

        const correct = selectedOption.id === currentWord.id;

        setIsCorrect(correct);
        setIsAnswered(true);
    }

    return {
        words,
        currentWord,
        options,
        selectedOption,
        setSelectedOption,
        loading,
        isAnswered,
        isCorrect,
        checkAnswer
    };
}