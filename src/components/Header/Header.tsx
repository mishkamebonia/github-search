import styles from "./Header.module.scss";
import { useTheme } from "../../providers/theme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.header}>
      <h1>devfinder</h1>
      <button onClick={toggleTheme}>
        <span>{theme}</span>{" "}
        {theme === "dark" ? (
          <i className="fa-solid fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun"></i>
        )}
      </button>
    </div>
  );
};

export default Header;
