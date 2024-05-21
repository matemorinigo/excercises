const LinkedList = require("./LinkedList").LinkedList;

class Node{
    constructor(key) {
        this._key = key;
        this._number = -1;
        this._adjList = new LinkedList();
    }

    get adjList(){
        return this._adjList;
    }

    get key(){
        return this._key;
    }

    get number(){
        return this._number;
    }

    set number(value) {
        this._number = value;
    }


}

class Edge{
    constructor(destination, weight=0){
        this._destination = destination;
        this._weight = weight;
    }

    get destination(){
        return this._destination;
    }

    get weight(){
        return this._weight;
    }
}

class Graph{

    constructor(cmp) {
        this._numNodes = 0;
        this._nodes = [];
        this._cmp = cmp;
    }

    adjList(numNode){
        if(numNode<0 || numNode>=this._numNodes)
            throw new Error("Number of node out of range");

        return this._nodes[numNode].adjList;
    }

    numNode(key){
        for(let node of this._nodes){
            if(this._cmp(node.key, key) === 0)
                return node.number;
        }
        return -1;
    }

    newNode(key){
        if(this.numNode(key) === -1){
            let node = new Node(key);
            node.number = this._numNodes;
            this._nodes[this._numNodes++] = node;
        }
    }

    isAdjacent(keyNode1,keyNode2){
        let numNode1 = this.numNode(keyNode1);
        let numNode2 = this.numNode(keyNode2);
        let isAdj = false;

        if(numNode1 === -1 || numNode2 === -1)
            throw new Error("Number of node out of range");

        this._nodes[numNode1].adjList.traverseLinkedList((edge)=>{
            if(edge.destination === numNode2)
                isAdj = true;
        })

        return isAdj;
    }

    newEdge(keyFrom, keyTo, weight=0){
        let numNodeFrom = this.numNode(keyFrom);
        let numNodeTo = this.numNode(keyTo);

        if(!this.isAdjacent(keyFrom,keyTo)){
            let newEdge = new Edge(numNodeTo,weight);
            this._nodes[numNodeFrom].adjList.insertAtBeginning(newEdge);
        }


    }

    removeEdge(keyFrom, keyTo){
        let numNodeFrom = this.numNode(keyFrom);
        let numNodeTo = this.numNode(keyTo);
        if(this.isAdjacent(keyFrom,keyTo)){
            this._nodes[numNodeFrom].adjList.removeNodeByKey(numNodeTo,(a,b)=>{
                return a.destination-b;
            });
        }
    }

    showGraph(){
        for(let i=0;i<this._numNodes;i++){
            console.log(i);
            this._nodes[i].adjList.showLinkedList();
            console.log();
        }
    }

    adjMatrix(){
        let adjMatrix = [];
        for(let i = 0; i<this._numNodes; i++){
            adjMatrix[i] = [];
            for(let j = 0; j<this._numNodes; j++){
                if(this.isAdjacent(this._nodes[i].key,this._nodes[j].key)){
                    adjMatrix[i][j] = this._nodes[i].adjList.findNodeByKey(this._nodes[j].key, (a,b)=>{
                        let auxKey = this._nodes[a.destination].key;
                        return auxKey.localeCompare(b);
                    }).data.weight;
                }
                else{
                    adjMatrix[i][j] = Infinity;
                }
            }
        }

        return adjMatrix;
    }

    dijkstra(keyFrom, keyTo){

        let distances = {};
        let previous = {};
        let unvisited = [];

        for(let node of this._nodes){
            distances[node.number] = Infinity;
            previous[node.number] = null;
            unvisited[node.number] = node;
        }
        distances[this.numNode(keyFrom)] = 0;


        while(unvisited.length > 0){
            let currentNode = unvisited.reduce((a,b)=> distances[a.number] < distances[b.number] ? a : b);

            if(currentNode.key === keyTo){
                let path = [];
                let current = currentNode;

                while(current !== null){
                    path.unshift(current.number);
                    current = previous[current.number];
                }
                return path;
            }

            unvisited = unvisited.filter(value => value.number !== currentNode.number)

            currentNode.adjList.traverseLinkedList((edge)=>{
                let alternative = distances[currentNode.number] + edge.weight;

                if(alternative < distances[edge.destination]){
                    distances[edge.destination] = alternative;
                    previous[edge.destination] = currentNode;
                }
            })



        }

        return null;
    }

    get nodes(){
        return this._nodes;
    }

}

module.exports = {Graph};