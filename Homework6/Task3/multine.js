function multiline(template){
    let aux = template[0];
    let result = template[0];
    let pos = 1;
    let extraChars = 1;

    while(aux.indexOf('\n') !== -1){

        result = `${result.slice(0,aux.indexOf('\n')+extraChars)}${pos} ${result.slice(aux.indexOf('\n')+extraChars)}`
        aux = `${aux.slice(0,aux.indexOf('\n'))} ${aux.slice(aux.indexOf('\n')+1)}`
        extraChars+=2;

        ++pos;
    }

    return result;

}


const code = multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);
// Expected:
// "1 function add(a, b) {
//  2 return a + b;
//  3 }"

module.exports = {multiline};