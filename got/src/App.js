import { useState } from "react";

import SearchBox from "./components/SearchBox/SearchBox.jsx";
import GraphBox from "./components/GraphBox/GraphBox.jsx";
import "./App.css";

import { importData, gotNames, jsonToGraph, bfs, isReachable } from "./utils";

function App() {
  const data = importData();
  const names = gotNames();
  const graph = jsonToGraph(data);
  const [searchData,setSearchData] = useState({'source':names[0],'target':names[0]})

  const handleCallback = (searchChildData) =>{
    setSearchData({'source':searchChildData['source'],'target':searchChildData['target']})
    bfs(graph, searchData['source'], searchData['target'])
    console.log(isReachable(graph, searchChildData['source'], searchChildData['target']))
  }
  
  return (
    <div className="App">
      {console.log(searchData)}
      <SearchBox names={names} parentCallback = {handleCallback}/>
      <GraphBox data={data} />
    </div>
  );
}

export default App;