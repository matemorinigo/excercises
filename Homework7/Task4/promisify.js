
function promisify(callbackStyleFunc){
    return new function(...args){
        return new Promise((resolve, reject) =>{
            callbackStyleFunc(...args,(error,value)=>{
                if(error)
                    reject(error);
                else
                    resolve(value);
            })
        })
    }
}



function callbackStyleFunction(value, callback) {
    setTimeout(() => {
        if (value > 0) {
            callback(null, value * 2);
        } else {
            callback("Invalid value", null);
        }
    }, 1000);
}

const promisedFunction = promisify(callbackStyleFunction);

promisedFunction(3)
    .then(result => {
        console.log("Promised function result:", result); // Expected: 6
    })
    .catch(error => {
        console.error("Promised function error:", error);
    });