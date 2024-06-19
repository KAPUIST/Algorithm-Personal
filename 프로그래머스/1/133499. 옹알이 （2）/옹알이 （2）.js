function solution(babbling) {
    const validSounds = ["aya", "ye", "woo", "ma"];
    
    function isValid(word) {
        // Initialize the previous sound to be an empty string
        let previousSound = "";
        
        while (word.length > 0) {
            let matched = false;
            // Iterate through valid sounds
            for (const sound of validSounds) {
                // Check if the word starts with the sound and the previous sound is not the same
                if (word.startsWith(sound) && previousSound !== sound) {
                    // Remove the sound from the beginning of the word
                    word = word.slice(sound.length);
                    // Update the previous sound
                    previousSound = sound;
                    matched = true;
                    break;
                }
            }
            // If no sound matched, return false
            if (!matched) {
                return false;
            }
        }
        // If the loop completed, the word is valid
        return true;
    }
    
    let count = 0;
    for (const word of babbling) {
        if (isValid(word)) {
            count++;
        }
    }
    
    return count;
}
