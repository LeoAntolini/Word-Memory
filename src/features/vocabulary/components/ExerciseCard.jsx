import { OptionButton } from "./OptionButton";
import { speakWord } from "../../../shared/utils/speakWord";

export function ExerciseCard({
    currentWord,
    options,
    selectedOption,
    setSelectedOption,
    isAnswered,
}) {
    return (
        <div>
            {/* IMAGEM */}
            <div>
                <img 
                  src={currentWord.imageURL} 
                  alt={currentWord.word} 
                  width={200}
                />
            </div>

            {/* OPÇÕES */}
            <div>
                {options.map((option) => {
                    
                    const isSelected = selectedOption?.id === option.id;
                    const isCorrectOption = option.id === currentWord.id;

                    return (
                        <OptionButton
                            key={option.id}
                            option={option}
                            isSelected={isSelected}
                            isAnswered={isAnswered}
                            isCorrectOption={isCorrectOption}
                            onSelect={(opt) => {
                                setSelectedOption(opt);
                                speakWord(opt.word)
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}