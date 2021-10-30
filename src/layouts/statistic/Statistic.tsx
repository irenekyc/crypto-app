import classNames from "classnames";
import { FunctionComponent } from "react";

import styles from "./Statistic.module.scss";

export interface StatisticProps {
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
  label: string;
  value: string | number;
}

const Statistic: FunctionComponent<StatisticProps> = ({
  className,
  labelClassName,
  valueClassName,
  label,
  value,
}: StatisticProps) => {
  return (
    <div className={classNames(styles.statistic, className)}>
      <span className={classNames(styles.statisticLabel, labelClassName)}>
        {label}
      </span>
      <span className={classNames(styles.statisticValue, valueClassName)}>
        {value.toLocaleString()}
      </span>
    </div>
  );
};

export default Statistic;
