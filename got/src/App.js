import { useState } from "react";

import SearchBox from "./components/SearchBox/SearchBox.jsx";
import GraphBox from "./components/GraphBox/GraphBox.jsx";
import "./App.css";

import { importData, gotNames, jsonToGraph, bfs, dfs } from "./utils";

function App() {
  const data = importData();
  const names = gotNames();
  const graph = jsonToGraph(data);
  const [bfsPath, setBfsPath] = useState();
  const [dfsPath, setDfsPath] = useState();

  const handleCallback = (searchChildData) => {
    setBfsPath(
      bfs(graph, searchChildData["source"], searchChildData["target"])
    );
    setDfsPath(
      dfs(graph, searchChildData["source"], searchChildData["target"])
    );
  };

  return (
    <div className="App">
      <div className="header">
        <h1>GoT Network</h1>
      </div>
      <div className="content">
        <SearchBox names={names} parentCallback={handleCallback} />
        <GraphBox data={data} bfsPath={bfsPath} dfsPath={dfsPath} />
      </div>
    </div>
  );
}

export default App;
