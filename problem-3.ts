{
    function countWordOccurrences(mainSentence: string, word: string): number {
        let count: number = 0;
        const allWords: string[] = mainSentence.toLowerCase().split(" ");
        const lowerWord: string = word.toLowerCase();

        for (let i = 0; i < allWords.length; i++) {
            if (allWords[i] === lowerWord) {
                count++;
            }
        }
        return count;
    }

    console.log(countWordOccurrences("I love typescript", "typescript"));
}