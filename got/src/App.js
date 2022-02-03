import { useState } from "react";

import SearchBox from "./components/SearchBox/SearchBox.jsx";
import GraphBox from "./components/GraphBox/GraphBox.jsx";
import "./App.css";

import { importData, gotNames, jsonToGraph, bfs } from "./utils";

function App() {
  const data = importData();
  const names = gotNames();
  const graph = jsonToGraph(data);
  const [bfsPath, setBfsPath] = useState(false);

  const handleCallback = (searchChildData) => {
    setBfsPath(bfs(graph, searchChildData["source"], searchChildData["target"]));
  };

  return (
    <div className="App">
      <SearchBox names={names} parentCallback={handleCallback} />
      <GraphBox data={data} bfsPath={bfsPath} />
    </div>
  );
}

export default App;
