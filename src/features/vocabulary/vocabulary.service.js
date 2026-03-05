//Simula um pequeno banco de dados local

const mockVocabulary = [
    {
        id: 1,
        word: "Apple",
        imageUrl: "/public/images/apple.jpg",
        audioUrl: "/assets/audio/apple.mp3",
        level: "basic"
    },
    {
        id: 2,
        word: "Car",
        imageUrl: "/public/images/car.png",
        audioUrl: "/assets/audio/car.mp3",
        level: "basic"
    },
]

export const VocabularyService = {
    async getWordsByLevel(level) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const filtered = mockVocabulary.filter(
                    (item) => item.level === level
                );
                resolve(filtered)
            }, 500);
        })
    }
}