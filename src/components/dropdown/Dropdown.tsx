import { FunctionComponent, useState } from "react";

import styles from "./Dropdown.module.scss";

interface DropdownProps {
  options: string[];
  onSelectHandler: (option: string) => void;
}

const Dropdown: FunctionComponent<DropdownProps> = ({
  options,
  onSelectHandler,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuHeight] = useState<number>(options.length * 30);
  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        Header
      </button>
      {isOpen && (
        <div
          className={styles.dropdownMenu}
          style={{ height: `${menuHeight}px` }}
        >
          {options.map((option: string) => (
            <button
              key={option}
              className={styles.dropdownItem}
              onClick={() => onSelectHandler(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
