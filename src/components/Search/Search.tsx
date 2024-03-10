import styles from "./Search.module.scss";
import { FormEvent } from "react";

type Props = {
  handleSearch: (event: FormEvent<HTMLFormElement>) => void;
  searchValue: string;
  setSearchValue: Function;
  searchError?: string | null;
};

const Search = (props: Props) => {
  return (
    <div className={styles.search}>
      <form onSubmit={props.handleSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="search"
          placeholder="Search GitHub username…"
          value={props.searchValue}
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
        <button>Search</button>
        <span>{props.searchError}</span>
      </form>
    </div>
  );
};

export default Search;
