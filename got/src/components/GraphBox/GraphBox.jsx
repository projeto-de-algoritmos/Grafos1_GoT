import "./GraphBox.css";

function GraphBox(props) {
  const bfsPath = props.bfsPath;
  const dfsPath = props.dfsPath;

  const showPath = (path) =>
    path ? (
      path.map((item, index) => <h3 key={index}>{item}</h3>)
    ) : path === false ? (
      <h2>Não há conexão</h2>
    ) : (
      <h2>Nada ainda</h2>
    );

  return (
    <div className="graphArea">
      <div className="dfsArea">
        <div className="headerSearch">DFS</div>
        <div className="pathAreaDfs">{showPath(dfsPath)}</div>
      </div>
      <div className="separateBar" />
      <div className="bfsArea">
        <div className="headerSearch">BFS</div>
        <div className="pathAreaBfs">{showPath(bfsPath)}</div>
      </div>
    </div>
  );
}

export default GraphBox;
