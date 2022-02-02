const importData = () => {
  const data = require("./data/data.json");

  return data;
};

const gotNames = () => {

  const data = importData();
  const sources = data.map((item) => item["Source"])
  const targets = data.map((item) => item["Target"])
  const allNames = sources.concat(targets)
  const nameSet = new Set(allNames);

  return [...nameSet];
};

const jsonToGraph = (json) => {
  var graph = {};

  const names = gotNames();

  names.forEach((item) => {
    graph[item] = [];
  });

  json.forEach((item) => {
    graph[item["Source"]].push(item["Target"]);
    graph[item["Target"]].push(item["Source"]);
  });

  return graph;
};

function visitedList(inputGraph) {

  const graph = inputGraph;
  const visited = [];
  for (var i = 0; i < Object.keys(graph).length; i++) visited[i] = false;

  return visited;
}

// esse posInitial e posDestiny precisamos puxar do SearchBox.
function bfs(graph, posInitial, posDestiny) {
  
  var queue = [];
  const visited = visitedList(graph);
  queue.push(posInitial);

  while (queue.length > 0) {
    var u = queue.shift();
    console.log(u)
    visited[u] = true;

    for (var i = 0; i < graph.length; i++) {
      if (graph[u][i] === 1) {
        if (i === posDestiny) {
          console.log(queue);
          alert("Chegou :)");
        }
        if (!visited[i]) queue.push([i]);
      }
    }
  }

  return false;
}

function isReachable(graph, s,d)
{

    const V = Object.keys(graph).length;
 
    let visited = new Array(V);
    for(let i = 0; i < V; i++)
    visited[i] = false;
    

    let queue = [];
    let n;
        visited[s] = true;
        queue.push(s);
  
        while (queue.length !== 0)
        {
            n = queue.shift();
              
            if(n === d)
                return true;
            for(let i = 0; i < graph[n].length; i++)
            {
                if (visited[graph[n][i]] === false)
                {
                    queue.push(graph[n][i]);
                    visited[graph[n][i]] = true;
                }
            }
             
        }

        return false;
}


module.exports = { importData, gotNames, jsonToGraph, bfs, isReachable };
