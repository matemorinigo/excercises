const Graph = require('../Graph').Graph;

let graph1 = new Graph((a,b)=>{
    return a.localeCompare(b);
})

graph1.newNode("mateo");
graph1.newNode("magali");

console.log(graph1.nodes);

graph1.newEdge("mateo","magali")

graph1.showGraph();

console.log();
console.log();
graph1.removeEdge("mateo","magali");
graph1.showGraph();
