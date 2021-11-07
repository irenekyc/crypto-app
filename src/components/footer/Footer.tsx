import { FunctionComponent } from "react";

import styles from "./Footer.module.scss";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <p> All rights reserved. Icons from Font awesome</p>
      <p> Developed by Irene K</p>
    </footer>
  );
};

export default Footer;
