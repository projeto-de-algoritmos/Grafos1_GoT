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

function bfs(graph, posInitial, posDestiny) {
  let queue = [[posInitial, []]],
    set = new Set();

  console.log(graph);

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
}

module.exports = { importData, gotNames, jsonToGraph, bfs };
