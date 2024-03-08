import { useState } from "react";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    fetch("https://api.github.com/users/mishkamebonia")
      .then((res) => res.json())
      .then((data) => {
        setCurrentSearch(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button>search</button>
      </form>
      <div className="output">
        <p>
          name: <span>{currentSearch.login}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
