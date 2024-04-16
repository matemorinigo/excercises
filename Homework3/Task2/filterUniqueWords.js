const getWords = x => x.match(/[a-zA-Z]+/g);
const filterUniqueWords = x => [...new Set(x)];

console.log(filterUniqueWords(getWords("hello name koala1451 hello koala 121 abc lol")));