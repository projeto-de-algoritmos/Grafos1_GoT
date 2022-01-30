import SearchBox from "./components/SearchBox/SearchBox.jsx";
import "./App.css";

import { importData, gotNames } from "./utils";

function App() {
  const data = importData();
  const names = gotNames();
  console.log(names);

  return (
    <div className="App">
      <SearchBox names={names} />
    </div>
  );
}

export default App;
