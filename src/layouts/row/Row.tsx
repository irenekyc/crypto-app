import { FunctionComponent, ReactNode } from "react";

import styles from "./Row.module.scss";

interface RowProps {
  children: ReactNode;
  width?: string;
}

const Row: FunctionComponent<RowProps> = ({
  children,
  width = "100%",
}: RowProps) => {
  return (
    <div className={styles.row} style={{ width }}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  width: "100%",
};

export default Row;
