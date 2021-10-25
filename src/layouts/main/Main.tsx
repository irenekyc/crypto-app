import { FunctionComponent } from "react";

import styles from "./Main.module.scss";

const Main: FunctionComponent = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
