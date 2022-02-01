import "./GraphBox.css";

function GraphBox(props) {
  return (
    <div className="graphArea">
      <div className="dfsArea">
        <div className="headerSearch">DFS</div>
      </div>
      <div className="separateBar"/>
      <div className="bfsArea">
        <div className="headerSearch">BFS</div>
      </div>
    </div>
  );
}

export default GraphBox;
