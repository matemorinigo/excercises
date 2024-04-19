const sort = x => x.sort();
const lowerCase = x => x !== null ? x.map((x)=>x.toLowerCase()) : [];
const getWords = x => x.match(/[a-zA-Z]+/g);
const deleteRepeated = x => [...new Set(x)];
const filterUniqueWords = x => deleteRepeated(sort(lowerCase(getWords(x))));


module.exports = {filterUniqueWords};

