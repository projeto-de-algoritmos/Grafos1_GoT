import { useState } from "react";
import "./SearchBox.css";

function SearchBox(props) {
  const names = props.names;

  const [character1, setCharacter1] = useState(names[0]);
  const [character2, setCharacter2] = useState(names[0]);

  const handleSubmit = (e) => {
    props.parentCallback({
      'source':character1,'target':character2
    })
    e.preventDefault();
  }

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <div className="character">
          <div className="characterArea">
            Primeiro personagem
            <select
              value={character1}
              onChange={(e) => setCharacter1(e.target.value)}
            >
              {names.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="characterArea">
            Segundo personagem
            <select
              value={character2}
              onChange={(e) => setCharacter2(e.target.value)}
            >
              {names.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="submitArea">
          <input className="submitButton" type="submit" value="Enviar" />
        </div>

      </form>
    </div>
  );
}

export default SearchBox;
