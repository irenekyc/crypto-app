import { FunctionComponent, ReactNode } from "react";

import styles from "./Page.module.scss";

interface PageProps {
  children: ReactNode;
}

const Page: FunctionComponent<PageProps> = ({ children }: PageProps) => {
  return <div className={styles.page}>{children}</div>;
};

export default Page;
