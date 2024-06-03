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
    let objectRegex = /^{.*}$/

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

/*
* About the main regex, that matches with the key:value syntax I had some problems
*
* First, I was trying to do this
*
* "\w+":\s\w+(,\s | }$) because I thought it was a way to match with the end of the main object,
* or with the comma that separates the objects. This obviously didnt work.
*
* Then, I realized that the array returned by string.match(regex) had something like this
* [theMatchingString, ", " (or }), and the other elements that match have]
*
* so I learnt that with () I store that part of the matching string, but the regex didnt work yet.
*
* My other approach was try to handle 1 nested object, so I tried with "\w+":\s(\w+|{[something???]})(,\s | }$)
*
* but because of the regex's last part (,\s | }$) it was doing something different. So I removed it, and it was better
*
* At that moment I knew that inside the brackets {[something???]} the objects couldnt have another brackets
* so at that moment I had /"(\w+)":(\w+|{[^{}]*})/ but it couldnt handle numeric values
*
* Then I realized that if it hadn't a comma or a closing bracket it means that will match with anything inside
*
* so I did that, /"(\w+)":([^,}]|{[^{}]*})/
*
* With the data type matching regex the thing was easier. The only problem I had was with the strings because they were
* stored as key: '"string"' so I fixed it slicing the string, and the same with the bigints values slicing the n to
* convert it in real BigInt
*
*
* */

let text = "{\"attr3\": {\"id\":44n, \"isReal\":\"asd\"}, \"attr1\": \"value1\", \"attr2\": 123, \"isFalse\":false, \"undefined\":undefined}"
console.log(myJSONParse(text));



