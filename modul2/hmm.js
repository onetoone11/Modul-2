
// var graph1 = createGraph("start","village","mountains");
// addEdge(graph1)("start")("village");
// addEdge(graph1)("village")("mountains")
// removeEdge(graph1)("start")("village")

// var graph2  = createGraph("start","village","mountains");
// var graph3  = createGraph("start","village","mountains");

// var graphA = createGraph("start","village","mountains");
// var graphB = createGraph("start","mountains");
// difference(graphA,graphB) //("village")



// removeNodes(graph1)("start","village")



const createGraph = (...nodeID) => {
    const obj = {};

    [...nodeID].map(element1 => { obj[element1] = {};[...nodeID].map(element2 => { obj[element1][element2] = false }) });
    return obj;
}

const addEdge = graph => nodeID1 => nodeID2 => {
    const obj = {};

    Object.assign(obj, graph);
    obj[nodeID1][nodeID2] = true;
    return obj;
}

const removeEdge = graph => nodeID1 => nodeID2 => {
    const obj = {};

    Object.assign(obj, graph);
    obj[nodeID1][nodeID2] = false;
    return obj;
}

//IMPORTANT: Implement more basic operations on graphs. Also, expand this to handle duplicates
const union = graph1 => graph2 => {
    const obj = {};
    const arr = [...Object.keys(graph1), ...Object.keys(graph2)];

    arr.map(element1 => {
        obj[element1] = {}; 
        arr.map(element2 => 
            obj[element1][element2] = (graph1[element1] && graph1[element1][element2]) || (graph2[element1] && graph2[element1][element2]) ? true : false)
    });

    return obj;
}

const difference = graph1 => graph2 => {
    const set = new Set();//very ugly function, I am not proud of it ;(

    Object.keys(graph1).map(element => set.add(element));
    Object.keys(graph2).map(element => set.delete(element));

    const obj = createGraph(...set.keys());
    [...set.keys()].map(element1 => [...set.keys()].map(element2 => obj[element1][element2] = graph1[element1][element2]));

    return obj;
}

const intersection = graph1 => graph2 => {
    return difference(graph1)(difference(graph1)(graph2));
}

const removeNodes = graph => (...nodeID) => {
    return difference(graph)(createGraph(...nodeID));
}

const addNodes = graph => (...nodeID) => {
    return union(graph)(createGraph(...nodeID));
}

const adjacentOutNodes = graph => nodeID => {
    return Object.entries(graph[nodeID]).filter(([key, value]) => value === true).map(element => element[0]);
}

// adjacentOutNodes(graph1)("start") => 

const transpose = graph => {
    const obj = {};

    Object.keys(graph).map(element1 => Object.keys(graph).map(element2 => {
        obj[element2] ??= {};
        obj[element2][element1] = graph[element1][element2];
    }));

    return obj;
}

const adjacentInNodes = graph => nodeID => {
    return adjacentOutNodes(transpose(graph))(nodeID);
    //Object.entries(transpose(graph)[nodeID]).filter(([key, value]) => value === true).map(element => element[0]);
}

const findSinks = graph => {
    return Object.keys(graph).filter(element => adjacentOutNodes(graph)(element).length === 0);
}

const findSources = graph => {
    return findSinks(transpose(graph));
    //Object.keys(graph).filter(element => adjacentInNodes(graph)(element).length === 0);
}



var graph9 = createGraph("start", "village", "mountains");  // Skapar en graf med noder

var graph3 = createGraph("home", "forest");  // Skapar en graf med noder


graph9 = addEdge(graph9)("start")("village");  // Skappar edges (pilar) mellan noderna... från1 till2
graph9 = addEdge(graph9)("start")("mountains");  // Skappar edges (pilar) mellan noderna... från1 till2
graph9 = addEdge(graph9)("village")("mountains");  // Skappar edges (pilar) mellan noderna... från1 till2

findSinks(graph9);  // Hittar slutet

findSources(graph9);  // Hittar starten

adjacentOutNodes(graph9)("start");  // Hittar alla noder som går ut

adjacentInNodes(graph9)("start");  // Hittar alla noder som går in

var graph3 = createGraph("home", "forest");  // Skapar en graf med noder



var graph39 = union(graph9)(graph3);  // Skapar en graf som innehåller en graf (sammansatta grafer)

graph39 = addEdge(graph39)("start")("home");  // Skapar edges (pilar) mellan noderna, i detta fallet ingår dem i en union.


difference(graph39)(graph3);  //Subtraherar graf1 med graf2 (skriv i rätt ordning), i detta fallet subtraherar man graf3 från graf39 (union, graf3 och graf9)
                              //Vilket med andra ord blir graf9 + graf3 - graf3 = graf39 - graf3 = graf9 

graph9 = removeEdge(graph9)("start")("village");  // Raderar den edge som är angiven
