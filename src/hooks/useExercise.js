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

    const [score, setScore] = useState(0);
    const [index, setIndex] = useState(0);

    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        async function loadWords() {
            setLoading(true);
            const data = await VocabularyService.getWordsByLevel(level);
            setWords(data);
            
            if (data.length > 0) {
                const word = data[index];

                const wrongOptions = data
                    .filter((w) => w.id !== word.id)
                    .slice(0, 3);

                const allOptions = shuffle([word, ...wrongOptions]);

                setCurrentWord(word);
                setOptions(allOptions);
            }

            setLoading(false)
        }

        loadWords();
    }, [index]);

    function checkAnswer() {
        if (!selectedOption) return;

        const correct = selectedOption.id === currentWord.id;

        if (correct) {
            setScore((prev) => prev + 1);
        }

        setIsCorrect(correct);
        setIsAnswered(true);
    }

    function nextQuestion() {
        const nextIndex = index + 1;

        if (nextIndex >= words.length) {
            setIsFinished(true);
            return;
        }

        setSelectedOption(null);
        setIsAnswered(false);
        setIsCorrect(null);
        setIndex((prev) => prev + 1);
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
        checkAnswer,
        nextQuestion,
        score,
        isFinished,
        words
    };
}