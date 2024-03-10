import styles from "./Result.module.scss";
import { User } from "../../App";

type Props = {
  searchedUser: User;
};

const Result = ({ searchedUser }: Props) => {
  const date = new Date(searchedUser?.created_at);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const year = date.getFullYear();
  const monthName = monthNames[date.getMonth()];

  return (
    <div className={styles.result}>
      <div className={styles.headerRow}>
        <img src={searchedUser?.avatar_url} alt="avatar" />
        <div className={styles.col}>
          <div className={styles.header}>
            <h1>{searchedUser?.name}</h1>
            <p>
              Joined {day} {monthName} {year}
            </p>
          </div>
          <a className={styles.link} href={searchedUser.html_url}>
            @{searchedUser?.login}
          </a>
          <p className={styles.about}>
            {searchedUser.bio ? searchedUser.bio : "This profile has no bio"}
          </p>
        </div>
      </div>
      <div className={styles.propertys}>
        <div className={styles.info}>
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
        <div className={styles.socialLinks}>
          <p className={`${searchedUser.location ? "" : styles.disabled}`}>
            <i className="fa-solid fa-location-dot"></i>{" "}
            {searchedUser.location ? searchedUser.location : "Not Available"}
          </p>
          <p
            className={`${
              searchedUser.twitter_username ? "" : styles.disabled
            }`}
          >
            <i className="fa-brands fa-twitter"></i>{" "}
            {searchedUser.twitter_username
              ? searchedUser.twitter_username
              : "Not Available"}
          </p>
          <a
            href={searchedUser.blog ? searchedUser.blog : undefined}
            className={`${searchedUser.blog ? "" : styles.disabled}`}
          >
            <i className="fa-solid fa-link"></i>{" "}
            <p>{searchedUser.blog ? searchedUser.blog : "Not Available"}</p>
          </a>
          <p className={`${searchedUser.company ? "" : styles.disabled}`}>
            <i className="fa-solid fa-building-user"></i>{" "}
            {searchedUser.company ? searchedUser.company : "Not Available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
