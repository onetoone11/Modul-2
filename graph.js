/*  Example of adjacency matrix:
    1  2  3  4  5  6
   -----------------
1 | 0  0  0  0  0  0
2 | 0  0  0  0  0  0
3 | 0  0  0  0  0  0
4 | 0  1  0  0  0  0
5 | 0  0  1  0  0  0
6 | 0  0  0  0  0  0

*/
function Graph() {
    const obj = {};

    const addNode = function (nodeID) { //reminder: update this function to have the ability to take in multiple nodeID's at once
        //Object.keys(obj) puts obj's keys into an array, which .map iterates through. 'element' in '.map' is the key of the current array cell.
        //
        Object.keys(obj).map(element => obj[element][nodeID] = false)
        obj[nodeID] = {};   //this is necessary otherwise obj[nodeID]["somestring"] cannot be assigned a value
        Object.keys(obj).map(element => obj[nodeID][element] = false)
        //explanation
    }

    const addEdge = function (nodeID_Source, nodeID_Target) {//adds an edge between two nodes
        obj[nodeID_Source][nodeID_Target] = true;//true means an edge is present between the two nodes, false means an edge is absent
    }

    const getOutAdjacents = function (nodeID) {
        return Object.entries(obj[nodeID]).filter(([key, value]) => value === false).map(element => element[0])
    }

    const getEdge = function (nodeID1, nodeID2) {
        return obj[nodeID1][nodeID2];
    }

    const getObject = function() {
        return obj;
    }

    return {addNode,addEdge,getOutAdjacents,getEdge,getObject};
}
/*
functions i'd like to add:
for the primitive "Graph();":
    graph.addNode("node-ID")
    graph.addEdge("source", "target", "edge-ID"[optional])
    graph.removeNode("node-ID") //removes this node, including all the edges connected to it
    graph.removeEdge("source", "target") OR graph.removeEdge("edge-ID")
    graph.getOutEdges("node-ID") //returns an array of edges pointing outwards from "node-ID", and the nodes they are pointing towards
    graph.getOutAdjacents("node-ID") //returns an array of node-IDs which this node's edges lead to
    graph.getNodes(); //returns an array of all node-IDs in a graph

    createLookUp(...args: string) // creates a lookup table from an array of strings

The lookup table will be an object, with every key being a node-ID

const nodeLookUp = {
    node-ID1 : {

    }

}

function Graph() {
    var nodes = ["start", ""];
}
//Get node command, gets the specified node and its children


var Graph = {
    "node1": { "node1": "node1->node1", "node2": "node" }
    // nodes.map(e => obj[e] = {});
    // nodes.map(e => nodes.map(el => obj[e][el] = {}));
}
*/
