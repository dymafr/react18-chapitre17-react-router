import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header() {
  // const matchHomepage = useMatch("/");
  // const matchProfile = useMatch("/profile/:id");

  // console.log(matchHomepage);
  // console.log(matchProfile);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <strong> React-router </strong>
      </div>
      <ul className={styles.headerList}>
        <NavLink style={({ isActive }) => (isActive ? {} : {})} end to="/">
          Homepage
        </NavLink>
        <NavLink
          // className={({ isActive }) => (isActive ? "link-active" : "")}
          to="/profile/123/jean?age=12"
        >
          Profile
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
