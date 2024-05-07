function promiseAllSettled(promises){
    return new Promise((resolve)=>{
        let promisesSettled = [];
        let countPromises = promises.length;

        for(let promise of promises){

            Promise.resolve(promise)
                .then(value => {
                    promisesSettled.push({
                        status: 'fulfilled',
                        value: value
                    })
                    --countPromises;
                })
                .catch(reason => {
                    promisesSettled.push({
                        status: 'rejected',
                        reason: reason
                    })
                    --countPromises;
                })
                .finally(()=>{
                    if(countPromises === 0)
                        resolve(promisesSettled);
                });

        }

    })
}

module.exports = {promiseAllSettled}

let prom1 = Promise.resolve(44);
let prom2 = Promise.reject(34);


let promises = promiseAllSettled([prom1,prom2])

promises.then(value => {
    console.log("Fulfilled " + JSON.stringify(value,null,2));
}).catch(reason => {
    console.log("Rejected " + reason);
})