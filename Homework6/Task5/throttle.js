function throttle (func, interval){
    let lastExec = -1;

    return function(){

        if(lastExec === -1 || (performance.now() - lastExec)>interval){
            func();
            lastExec = performance.now();
        }

    }
}

module.exports = {throttle};

function onScroll(event) {
    // Handle scroll event
    console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);
