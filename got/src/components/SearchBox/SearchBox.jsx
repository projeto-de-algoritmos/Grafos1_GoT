import { useState } from "react";
import "./SearchBox.css";

function SearchBox(props) {
  const names = props.names;

  const [search, setSearch] = useState("bfs");
  const [character1, setCharacter1] = useState(names[0]);
  const [character2, setCharacter2] = useState(names[0]);

  return (
    <div className="SearchBox">
      {console.log(character1)}
      {console.log(character2)}
      {console.log(search)}
      <div className="character">
        <div className="characterArea">
          Primeiro personagem
          <select value={character1} onChange={(e) => setCharacter1(e.target.value)}>
            {names.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="characterArea">
          Segundo personagem
          <select value={character2} onChange={(e) => setCharacter2(e.target.value)}>
            {names.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="selection">
        <div>
          <input
            type="radio"
            value="bfs"
            name="searchType"
            checked={search === "bfs"}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          BFS
        </div>
        <div>
          <input
            type="radio"
            value="dfs"
            name="searchType"
            checked={search !== "bfs"}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          DFS
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
