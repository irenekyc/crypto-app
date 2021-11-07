import classnames from "classnames";
import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";

import navList, { HOME } from "../../constants/nav";
import getNavIcons from "../../helpers/getNavIcons";
import { useAppMediaQuery } from "../../hooks";
import { NavItemProps } from "../../typings/Nav";
import Header from "../header";
import styles from "./Nav.module.scss";

const NavBar: FunctionComponent = () => {
  const { pathname } = useLocation();
  const { isLG } = useAppMediaQuery();
  return (
    <nav className={styles.nav}>
      {isLG && <Header />}
      {navList.map((navItem: NavItemProps) => (
        <Link
          to={navItem.path}
          className={classnames(styles.navItem, {
            [styles.active]:
              pathname.includes(navItem.path) && navItem.vanityName !== HOME,
          })}
          key={navItem.vanityName}
        >
          {getNavIcons(navItem.vanityName)}
          <span>{navItem.vanityName}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
