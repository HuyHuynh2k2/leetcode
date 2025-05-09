/**
 * Difficulty easy
 * 
 * Greatest Common Divisor of Stirngs
 * 
 *
 */

 var gcdOfStrings = function(str1, str2) {
    if ((str1 + str2) !== (str2 + str1)) {
        return "";
    }

    return str1.substring(0, gcd(str1.length, str2.length));

};

const gcd = (a, b) => { 
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcdOfStrings("ABCABC", "ABC"));