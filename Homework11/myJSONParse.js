/*
* To convert the strings into valid js types I use some regexs
* that matches with them
*
* */
function strToJsType(string){
    let strRegex = /^"[^{}]*"$/;
    let boolRegex = /^(true|false)$/;
    let numRegex = /^\d+$/;
    let bigIntRegex = /^\d+n$/;
    let undefinedRegex = /^undefined$/;
    let objectRegex = /{.*}/

    if(string.match(strRegex))
        return string.slice(1,string.length-1);
    else if(string.match(boolRegex))
        return string=== "true";
    else if(string.match(numRegex))
        return Number(string);
    else if(string.match(bigIntRegex))
        return BigInt(string.slice(0,string.length-1));
    else if(string.match(undefinedRegex))
        return undefined;
    else if(string.match(objectRegex))
        return myJSONParse(string);
    else
        throw new Error("The string is not a valid type");
}


function myJSONParse(str) {
    /*
    regex is a regular expression that stores on match[1] the key of the matching string
    then in match[2] the value of the string, that could be an object -> {[^{}]}
    but it doesnt handle more than 1 nested object
    or anything different from an object [^,}] because if it contains , or }
    means that is not an object
    */

    let regex = /"(\w+)":\s*({[^{}]*}|[^,}]*)/g;
    let match;
    let result = {};


    /*
    * then I use a while loop with regex.exec that iterates
    * the string looking for the matches, and stores in the key the
    * js valid type of the value string
    * */

    while ((match = regex.exec(str)) !== null) {
        let key = match[1];
        let value = match[2];
        result[key] = strToJsType(value);
    }

    return result;
}



let text = "\"attr3\": {\"id\":44n, \"isReal\":\"asd\"}, \"attr1\": \"value1\", \"attr2\": 123, \"isFalse\":false, \"undefined\":undefined"
console.log(myJSONParse(text));

console.log()


