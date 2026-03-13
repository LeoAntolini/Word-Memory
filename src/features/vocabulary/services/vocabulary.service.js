//Simula um pequeno banco de dados local
import { words } from '../data/words'
 
export const VocabularyService = {
    async getWordsByLevel(level) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const filtered = words.filter(
                    (item) => item.level === level
                );
                resolve(filtered)
            }, 500);
        })
    }
}