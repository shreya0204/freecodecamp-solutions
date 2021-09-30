function findLongestWordLength(str) {
    let totalwords = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < totalwords.length; i++) {
        if (totalwords[i].length > maxLength) {
            maxLength = totalwords[i].length;
        }
    }

    return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");