import "./GraphBox.css";

function GraphBox(props) {
  const bfsPath = props.bfsPath;
  return (
    <div className="graphArea">
      <div className="dfsArea">
        <div className="headerSearch">DFS</div>
      </div>
      <div className="separateBar" />
      <div className="bfsArea">
        <div className="headerSearch">BFS</div>
        {bfsPath ? (
          bfsPath.map((item) => (
         
            <h3>{item}</h3> 
            
          ))
        ) : (
          <h1>Nada</h1>
        )}
      </div>
    </div>
  );
}

export default GraphBox;
