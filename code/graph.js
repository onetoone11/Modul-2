const createGraph = (...nodeID) => {
    const obj = {};

    [...nodeID].map(element1 => { obj[element1] = {};[...nodeID].map(element2 => { obj[element1][element2] = false }) });
    return obj;
}

const getVertices = graph => {
    return Object.keys(graph);
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

const transpose = graph => {
    const obj = {};

    Object.keys(graph).map(element1 => Object.keys(graph).map(element2 => {
        obj[element2] ??= {};
        obj[element2][element1] = graph[element1][element2];
    }));

    return obj;
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

const edges = graph => {
    return Object.entries(graph).map(([key1, value1]) => Object.entries(value1).filter(([key2,value2]) => value2 === true).map(([key2, value2]) => [key1, key2])).flat(1);
}

const edgeTable = graph => {
    const obj = {};
    edges(graph).map(([key, value]) =>{ obj[key] = {}; obj[key][value] = null});
    return Object.freeze(obj);
}

const setEdgeLabel = edgeTable => nodeID1 => nodeID2 => label => {
    const obj = edgeTable;
    if(obj[nodeID1][nodeID2] === null) {
        obj[nodeID1][nodeID2] = label;
        return obj;
    }
}

const getEdgeLabel = edgeTable => nodeID1 => nodeID2 => {
    return edgeTable[nodeID1][nodeID2];
}
