import classnames from "classnames";
import { ButtonHTMLAttributes, FunctionComponent } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  label: string;
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  active,
  label,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classnames(styles.button, className, {
        [styles.activeStyle]: active,
      })}
      {...props}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  active: undefined,
};

export default Button;
