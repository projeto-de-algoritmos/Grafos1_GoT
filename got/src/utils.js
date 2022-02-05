const importData = () => {
  const data = require("./data/data.json");

  return data;
};

const gotNames = () => {
  const data = importData();
  const sources = data.map((item) => item["Source"]);
  const targets = data.map((item) => item["Target"]);
  const allNames = sources.concat(targets);
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

const bfs = (graph, posInitial, posDestiny) => {
  if (posInitial === posDestiny) {
    return [posInitial];
  }

  let queue = [[posInitial, []]],
    set = new Set();

  while (queue.length) {
    let [u, [...connection]] = queue.shift();
    connection.push(u);

    if (u === posDestiny) return connection;

    if (!set.has(u) && graph[u]) {
      queue.push(...graph[u].map((v) => [v, connection]));
    }
    set.add(u);
  }
  return false;
};

const dfs = (graph, posInitial, posDestiny) => {
  if (posInitial === posDestiny) {
    return [posInitial];
  }

  let visited = {};
  let stack = [];
  let connections = [];

  const names = gotNames();

  names.forEach((name) => {
    visited[name] = false;
  });

  stack.push(posInitial);

  while (stack.length !== 0) {
    let s = stack.pop();

    if (visited[s] === false) {
      connections.push(s);
      visited[s] = true;
    }

    for (let j = 0; j < graph[s].length; j++) {
      if (graph[s][j] === posDestiny) {
        connections.push(graph[s][j]);
        return connections;
      }
      if (visited[graph[s][j]] === false) {
        stack.push(graph[s][j]);
      }
    }
  }

  return false;
};

module.exports = { importData, gotNames, jsonToGraph, bfs, dfs };
