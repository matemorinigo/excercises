const Graph = require('../Graph').Graph;

let graph1 = new Graph((a,b)=>{
    return a-b;
})

graph1.newNode(0);
graph1.newNode(1);
graph1.newNode(2);
graph1.newNode(3);
graph1.newNode(4);
graph1.newNode(5);
graph1.newNode(6);

console.log(graph1.nodes);

graph1.newEdge(0,6,1);
graph1.newEdge(0,5,1);
graph1.newEdge(0,1,1);

graph1.newEdge(1,5,1);
graph1.newEdge(1,4,1);
graph1.newEdge(1,3,1);

graph1.newEdge(4,6,1);
graph1.newEdge(4,2,1);
graph1.newEdge(6,0,1);
//graph1.showGraph();

console.log(graph1.depthFirstSearch(0,node=>console.log(node.key)));



//graph1.showGraph();

/*
console.log(graph1.adjMatrix());

console.log();
console.log();
graph1.removeEdge("mateo","magali");
graph1.showGraph();
*/
