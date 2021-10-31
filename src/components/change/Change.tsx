import classnames from "classnames";
import { FunctionComponent } from "react";

import styles from "./Change.module.scss";

const GROWTH_SYMBOL = "+";
const LOST_SYMBOL = "-";
const GROWTH = "GROWTH";
const LOST = "LOST";
const PERCENTAGE_SYMBOL = "%";

interface ChangeProps {
  className?: string;
  value: string | number;
  withSymbol?: boolean;
  withPercentage?: boolean;
}

const Change: FunctionComponent<ChangeProps> = ({
  className,
  value,
  withSymbol,
  withPercentage,
}) => {
  let change: string | undefined;
  if (typeof value === "string") {
    if (value.includes(GROWTH_SYMBOL)) {
      change = GROWTH;
    } else if (value.includes(LOST_SYMBOL)) {
      change = LOST;
    }
  }
  if (typeof value === "number") {
    if (value < 0) {
      change = LOST;
    } else if (value === 0) {
      change = undefined;
    } else {
      change = GROWTH;
    }
  }

  const symbol = change === GROWTH ? GROWTH_SYMBOL : "";

  return (
    <span
      className={classnames(className, {
        [styles.growth]: change === GROWTH,
        [styles.lost]: change === LOST,
      })}
    >
      {withSymbol && symbol}

      {value}

      {withPercentage && PERCENTAGE_SYMBOL}
    </span>
  );
};

Change.defaultProps = {
  className: "",
  withSymbol: false,
  withPercentage: false,
};

export default Change;
