/*addValues: Accepts two arguments of any type and performs the appropriate
addition operation based on the types of the arguments. The function should
return the result of the addition. If the addition is not possible, it should
throw an error*/
function addValues(a,b){
    if(typeof a !== typeof b)
        throw Error("Parameters are of differents data types");

    if(typeof a === "number" && !isNaN(a) && !isNaN(b)){
        return a+b;
    }
    else if(typeof a === "bigint" || typeof a === "string"){
        return a + b
    }
    else if(typeof a === "boolean"){
        if(a || b){
            return 1
        }
        else{
            return 0
        }
    }
    else{
        throw Error("Values cannot be added");
    }
}

/*stringifyValue: Accepts a single argument of any type
and converts it to a string representation. For objects
and arrays, use JSON.stringify() for serialization. For
other types, use the appropriate built-in methods or operations
to convert them to strings.*/

function stringifyValue(value){
    if(typeof value === "object"){
        return JSON.stringify(value);
    }
    else if(value !== undefined){
        return value.toString();
    }
    else{
        throw Error("Undefined value");
    }
}


/*invertBoolean: Accepts a single boolean argument and returns
its inverted value. If the argument is not a boolean, it should throw an error.
*/

function invertBoolean(value){
    if(typeof value !== "boolean"){
        throw Error("Value is not boolean");
    }
    else{
        return !value;
    }
}

/*convertToNumber: Accepts a single argument of any type and attempts to
convert it to a number. For strings, use parseFloat() or parseInt() for
conversion. For other types, use appropriate operations or functions to perform
the conversion. If the conversion is not possible, it should throw an error.*/

function convertToNumber(value){

    if(typeof value === "string"){
        if(value.includes(".")){
            return parseFloat(value);
        }
        else{
            return parseInt(value);
        }
    }
    else if(typeof value === "boolean"){
        if(value){
            return 1;
        }else {
            return 0;
        }
    }
    else if(typeof value === "bigint"){
        if(value>=Number.MIN_SAFE_INTEGER && value<=Number.MAX_SAFE_INTEGER){
            return Number(value);
        }else{
            throw Error("Value cannot be converted");
        }
    }
    else{
        throw Error("Value cannot be converted");
    }

}

/*coerceToType: Accepts two arguments: value and type. It
attempts to convert the value to the specified type using type
coercion. The function should return the coerced value if successful.
If the coercion is not possible, it should throw an error.*/

function coerceToType(value, type){

    if(type === undefined){
        throw Error("Cannot convert value to undefined");
    }
    else if(type === "string"){
        //if typeof value === str
        //else if === number
        //else if === bigint
        //etc
        //or
        //stringifyValue(value)???
    }else if(type === "number"){
        //if typeof value === str
        //else if === number
        //else if === bigint
        //etc
        //or
        //convertToNumber(value)???
    }else if(type === "bigint"){

    }else if(type === "object"){
        //It is possible to convert value into an object??? -> Should throw an error when type is object?
    }else{
        throw Error("Type doesnt exists");
    }
}

module.exports = {addValues, stringifyValue, invertBoolean, convertToNumber};

