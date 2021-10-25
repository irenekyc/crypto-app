import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import navList from "../../constants/nav";
import { NavItemProps } from "../../typings/Nav";
import styles from "./Nav.module.scss";

const NavBar: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      {navList.map((navItem: NavItemProps) => (
        <Link to={navItem.path} className={styles.navItem}>
          <span>{navItem.vanityName}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
