import { FunctionComponent, ReactNode } from "react";

import styles from "./StatisticTable.module.scss";

type Statistic = {
  label: string;
  value: string | number | ReactNode;
};

type StatisticTableProps = {
  data: Statistic[];
  title: string;
};

const StatisticTable: FunctionComponent<StatisticTableProps> = ({
  title,
  data,
}: StatisticTableProps) => {
  return (
    <table className={styles.statisticTable}>
      <thead className={styles.statisticTitle}>{title}</thead>
      {data.map((statistic: Statistic) => (
        <tr key={`${statistic.label}:${statistic.value}`}>
          <td className={styles.statisticRow}>
            <span className={styles.statisticLabel}> {statistic.label}</span>
            {typeof statistic.value === "string" ||
            typeof statistic.value === "number" ? (
              <span className={styles.statisticValue}>{statistic.value}</span>
            ) : (
              statistic.value
            )}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default StatisticTable;
