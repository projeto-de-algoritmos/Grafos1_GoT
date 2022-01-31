import SearchBox from "./components/SearchBox/SearchBox.jsx";
import GraphBox from "./components/GraphBox/GraphBox.jsx";
import "./App.css";

import { importData, gotNames } from "./utils";

function App() {
  const data = importData();
  const names = gotNames();

  return (
    <div className="App">
      <SearchBox names={names} />
      <GraphBox data={data} />
    </div>
  );
}

export default App;
