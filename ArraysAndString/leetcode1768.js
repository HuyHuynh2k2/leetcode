/**
 * Difficulty easy
 * 
 * Merge String Alternately
 * 
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
 * If a string is longer than the other, append the additional letters onto the end of the merged string.
 */

const mergeAlternately = (word1, word2) => {
    let result = "";
    let pointerA = 0;
    let pointerB = 0;

    while (pointerA < word1.length && pointerB < word2.length) {
        result += word1[pointerA] + word2[pointerB];
        pointerA++;
        pointerB++;
    }

    if (word1.length > word2.length) {
        result += word1.substring(pointerA);
    } else {
        result += word2.substring(pointerB);
    }
    return result;
}

console.log(mergeAlternately("ab", "pqrs"));