import classnames from "classnames";
import { FunctionComponent, MouseEventHandler, ReactNode } from "react";

import styles from "./Accordion.module.scss";

interface AccordionProps {
  activeKey: string;
  selectHandler: MouseEventHandler;
  active: boolean;
  Header: ReactNode;
  Collapse: ReactNode;
}

const Accordion: FunctionComponent<AccordionProps> = ({
  activeKey,
  active,
  selectHandler,
  Header,
  Collapse,
  ...props
}: AccordionProps) => {
  return (
    <div {...props} className={styles.accordion}>
      <button
        className={classnames(styles.accordionHeader, {
          [styles.activeHeader]: active,
        })}
        onClick={selectHandler}
        id={activeKey}
      >
        {Header}
      </button>
      <div
        className={classnames(styles.accordionCollapse, {
          [styles.active]: active === true,
          [styles.inactive]: active === false,
        })}
      >
        {Collapse}
      </div>
    </div>
  );
};

export default Accordion;
