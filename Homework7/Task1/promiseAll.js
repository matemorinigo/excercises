/*function promiseAll(promises){
    let values = [];
    let isRejected = false;

    for(promise of promises){
        promise.then(value =>{
            values.push(value);
        }).catch(reason=>{
            values = reason;
            isRejected = true;
        })

        if(isRejected){
            return new Promise((resolve,reject)=>{
                reject(values);
            });
        }

    }

    return new Promise(resolve=>{
        resolve(values);
    })

}*/

function promiseAll(promises){
    return new Promise((resolve, reject)=>{
        let values = [];
        let countPromises = promises.length;

        if(promises === [])
            resolve([]);

        for(let promise of promises){

            Promise.resolve(promise)
                .then(value =>{
                    values.push(value);
                    --countPromises;
                    if(countPromises===0)
                        resolve(values);
                }).catch(reason => {
                    reject(reason);
                });

        }

    })

}

module.exports = {promiseAll};

let prom1 = Promise.resolve(44);
let prom2 = Promise.resolve(34);


let promises = promiseAll([prom1,prom2])

promises.then(value => {
    console.log("Fulfilled " + value);
}).catch(reason => {
    console.log("Rejected " + reason);
})

