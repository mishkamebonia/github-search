import { useState } from "react";
import "./App.scss";

interface User {
  avatar_url: string;
  name: string;
  created_at: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter_username: string;
  company: string;
}

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchedUser, setSearchedUser] = useState<User | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.github.com/users/${searchValue}`
      );
      if (!response.ok) {
        setSearchError("No results");
      }
      const data = await response.json();
      setSearchError(null);
      setSearchedUser(data);
    } catch (err) {
      console.error(err);
    }
  };

  const date = new Date(searchedUser.created_at);

  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="content">
      <div className="card">
        <div className="card-header">
          <h1>devfinder</h1>
          <button>
            DARK <i className="fa-solid fa-moon"></i>
          </button>
        </div>
        <div className="search-form">
          <form onSubmit={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search GitHub username…"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button>Search</button>
            {/* <p>error: {searchError}</p> */}
          </form>
        </div>
        {searchedUser ? (
          <div className="search-result">
            <img src={searchedUser?.avatar_url} alt="avatar" />
            <div className="user-propertys">
              <div className="user-header">
                <h1>{searchedUser?.name}</h1>
                <p>Joined {formattedDate}</p>
              </div>
              <a className="link" href="#">
                @{searchedUser?.login}
              </a>
              <p className="about">
                {searchedUser.bio
                  ? searchedUser.bio
                  : "This profile has no bio"}
              </p>
              <div className="info-row">
                <div>
                  <h4>Repos</h4>
                  <h2>{searchedUser?.public_repos}</h2>
                </div>
                <div>
                  <h4>Followers</h4>
                  <h2>{searchedUser?.followers}</h2>
                </div>
                <div>
                  <h4>Following</h4>
                  <h2>{searchedUser?.following}</h2>
                </div>
              </div>
              <div className="social-links">
                <p>
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  {searchedUser.location
                    ? searchedUser.location
                    : "Not Available"}
                </p>
                <p>
                  <i className="fa-brands fa-twitter"></i>{" "}
                  {searchedUser.twitter_username
                    ? searchedUser.twitter_username
                    : "Not Available"}
                </p>
                <a href={searchedUser?.blog}>
                  <i className="fa-solid fa-link"></i>{" "}
                  {searchedUser.blog ? searchedUser.blog : "Not Available"}
                </a>
                <p>
                  <i className="fa-solid fa-building-user"></i>{" "}
                  {searchedUser.company
                    ? searchedUser.company
                    : "Not Available"}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
