import classnames from "classnames";
import { FunctionComponent, ReactNode } from "react";

import styles from "./Row.module.scss";

interface RowProps {
  className?: string;
  children: ReactNode;
  width?: string;
}

const Row: FunctionComponent<RowProps> = ({
  className,
  children,
  width = "100%",
}: RowProps) => {
  return (
    <div className={classnames(styles.row, className)} style={{ width }}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  className: "",
  width: "100%",
};

export default Row;
