import { FunctionComponent } from "react";
import sanitizeHtml from "sanitize-html";

import styles from "./ExchangesCollapse.module.scss";

interface ExchangesCollapseProps {
  description: string;
}

const ExchangesCollapse: FunctionComponent<ExchangesCollapseProps> = ({
  description,
}: ExchangesCollapseProps) => {
  return (
    <div className={styles.collapse}>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(description) }}
      />
    </div>
  );
};

export default ExchangesCollapse;
