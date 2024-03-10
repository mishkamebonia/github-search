import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>devfinder</h1>
      <button>
        DARK <i className="fa-solid fa-moon"></i>
      </button>
    </div>
  );
};

export default Header;
