import { useState } from "react";

import SearchBox from "./components/SearchBox/SearchBox.jsx";
import GraphBox from "./components/GraphBox/GraphBox.jsx";
import "./App.css";

import { importData, gotNames } from "./utils";

function App() {
  const data = importData();
  const names = gotNames();
  const [searchData,setSearchData] = useState({'source':names[0],'target':names[0]})

  const handleCallback = (searchChildData) =>{
    setSearchData({'source':searchChildData['source'],'target':searchChildData['target']})
    // Aqui temos o nome dos personagens de origem e destino que são puxados do componente de busca
    // Podemos criar a função das buscas dfs e bfs no arquivo utils.js e 
    // importar aqui (linha 7) para enviar para o GraphBox
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