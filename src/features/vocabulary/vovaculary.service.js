//Simula um pequeno banco de dados local

const mockVocabulary = [
    {
        id: 1,
        word: "Apple",
        imageUrl: "/assets/images/apple.jpg",
        audioUrl: "/assets/audio/apple.mp3",
        level: "basic"
    },
    {
        id: 2,
        word: "Car",
        imageUrl: "/assets/images/car.jpg",
        audioUrl: "/assets/audio/car.mp3",
        level: "basic"
    },
    {
        id: 3,
        word: "Mountain",
        imageUrl: "/assets/images/mountain.jpg",
        audioUrl: "/assets/audio/mountain.mp3",
        level: "intermediate"
    }
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