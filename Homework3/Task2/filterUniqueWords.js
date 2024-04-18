const lowerCase = x => x !== null ? x.map((x)=>x.toLowerCase()) : [];
const getWords = x => lowerCase(x.match(/[a-zA-Z]+/g));
const filterUniqueWords = x => [...new Set(getWords(x).sort())];


module.exports = {filterUniqueWords};

