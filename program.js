function countWords(inputWords) {
    let obj = {};
    inputWords
        .map((item) => {
            obj[item] = inputWords.reduce((sum, current) => {
                if (current == item) sum++;
                return sum;
            }, 0);
        });
    return obj;
}

module.exports = countWords;
