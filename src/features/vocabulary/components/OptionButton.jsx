export function OptionButton({
    option,
    isSelected,
    isAnswered,
    isCorrectOption,
    onSelect,
}) {
    let background = "white";

    if (!isAnswered && isSelected) {
        background = "#CCC";
    }

    if (isAnswered) {
        if (isCorrectOption) background = "#4CAF50"
        else if (isSelected) background = "#F44336"
    }

    return (
        <button
            onClick={() => onSelect(option)}
            disabled={isAnswered}
            style={{
                display: "block",
                margin: "10px 0",
                background,
                padding: "10px",
            }}
        >
            {option.word}
        </button>
    )
}