import { useState } from "react";
import styles from "./App.module.scss";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";

export type User = {
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
  html_url: string;
};

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

        setTimeout(() => {
          setSearchError(null);
        }, 3000);
      }

      const data = await response.json();
      setSearchedUser(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <Header />
        <Search
          handleSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchError={searchError}
        />
        {searchedUser?.login ? <Result searchedUser={searchedUser} /> : null}
      </div>
    </div>
  );
}

export default App;
