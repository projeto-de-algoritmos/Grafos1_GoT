import './SearchBox.css'

function SearchBox() {
    return (
      <div className="SearchBox">
        <div className='character'>
          <div className='characterArea'>
            <text>
              Primeiro personagem
            </text>
            <select value='character1'>
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
            </select>
          </div>
          <div className='characterArea'>
            <text>
              Segundo personagem
            </text>
            <select value='character2'>
              <option value="laranja">Laranja</option>
              <option value="limao">Limão</option>
              <option value="coco">Coco</option>
              <option value="manga">Manga</option>
            </select>
          </div>
        </div>
        
        <div className='selection'>
          <div>
            <input type="radio" value="bfs" name="searchType" /> BFS 
          </div>
          <div>
            <input type="radio" value="dfs" name="searchType" /> DFS
          </div>
        </div>

      </div>
    );
  }
  
  export default SearchBox;