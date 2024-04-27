function measureArrayPerformance(arr,func,extra){
    const startTime = performance.now();
    func(arr,extra);
    const endTime = performance.now();

    return endTime-startTime;
}

module.exports = {measureArrayPerformance};

