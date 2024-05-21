const Graph = require('../Graph').Graph;

let graph1 = new Graph((a,b)=>{
    return a.localeCompare(b);
})

graph1.newNode("mateo");
graph1.newNode("magali");
graph1.newNode("ramiro");
graph1.newNode("agustin");

console.log(graph1.nodes);

graph1.newEdge("mateo","ramiro",2)
graph1.newEdge("mateo","magali",3)
graph1.newEdge("ramiro","agustin",1)
graph1.newEdge("magali","agustin",1)

console.log(graph1.dijkstra("mateo","agustin"))



//graph1.showGraph();

/*
console.log(graph1.adjMatrix());

console.log();
console.log();
graph1.removeEdge("mateo","magali");
graph1.showGraph();
*/
