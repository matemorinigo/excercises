const Graph = require('../Graph').Graph;

let graph1 = new Graph((a,b)=>{
    return a.localeCompare(b);
})

graph1.newNode("mateo");
graph1.newNode("magali");
graph1.newNode("ramiro");
graph1.newNode("agustin");
graph1.newNode("martin");
graph1.newNode("tomas");

console.log(graph1.nodes);

graph1.newEdge("mateo","ramiro",2)
graph1.newEdge("mateo","magali",3)
graph1.newEdge("mateo","martin",3)
graph1.newEdge("ramiro","agustin",1)
graph1.newEdge("magali","agustin",1)
graph1.newEdge("martin","agustin",1)
graph1.newEdge("agustin","tomas",1)

console.log(graph1.breadthFirstSearch("mateo",node=>console.log(node.key)));



//graph1.showGraph();

/*
console.log(graph1.adjMatrix());

console.log();
console.log();
graph1.removeEdge("mateo","magali");
graph1.showGraph();
*/
