//The extra argument is for functions that needs callback functions
// or additional information
function measureArrayPerformance(arr,func,extra){
    const startTime = performance.now();
    func(arr,extra);
    const endTime = performance.now();

    return endTime-startTime;
}

module.exports = {measureArrayPerformance};

