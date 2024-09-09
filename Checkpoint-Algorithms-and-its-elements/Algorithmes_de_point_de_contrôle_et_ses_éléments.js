function counter(sentence) {
    let lengthSentences = 0;
    let numberWords = 0;
    let numberVowels = 0;
    // liste des voyelles
    let vowels = "aeiouAEIOU";
    for (char of sentence) {
        if (char !== '.') {
            lengthSentences ++ ;
        }
        if (vowels.includes(char)) {
            numberVowels++;
            }
        if (char === " ") {
            numberWords ++;
        }
    }   
    return lengthSentences;
    return numberWords +1;
    return numberVowels; 
}
    let sentence = "Hello."
    console.log(counter(sentence))

