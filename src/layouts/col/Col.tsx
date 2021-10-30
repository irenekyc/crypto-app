import classnames from "classnames";
import { FunctionComponent, ReactNode } from "react";

import { LG, MD, XS } from "../../constants/responsive";
import useAppMediaQuery from "../../hooks/useAppMedia";
import { ResponsiveColSpan } from "../../typings/Responsive";
import { StylesType } from "../../typings/Styles";
import styles from "./Col.module.scss";

const defaultStyle: StylesType = {
  flex: "1 0 0",
};

const convertSpanToStyle = (
  span: ResponsiveColSpan,
  size: typeof XS | typeof MD | typeof LG
): StylesType => {
  const convertSpanToWidth = (spanNumber: number): string => {
    return `${Math.round((spanNumber / 12) * 100)}%`;
  };

  const getStyle = (
    spanValue: number | "auto" | undefined
  ): StylesType | undefined => {
    if (!spanValue) return undefined;
    if (typeof spanValue === "number") {
      return { width: convertSpanToWidth(spanValue) };
    }
    return { width: "auto" };
  };

  const xsStyle = getStyle(span.xs);
  const mdStyle = getStyle(span.md);
  const lgStyle = getStyle(span.lg);

  if (size === XS) {
    if (!xsStyle) {
      return defaultStyle;
    }
    return xsStyle;
  }
  if (size === MD) {
    if (!mdStyle) {
      if (xsStyle) {
        return xsStyle;
      }
      return defaultStyle;
    }
    return mdStyle;
  }
  if (size === LG) {
    if (!lgStyle) {
      if (mdStyle) {
        return mdStyle;
      }
      if (xsStyle) {
        return xsStyle;
      }
      return defaultStyle;
    }
    return lgStyle;
  }
  return defaultStyle;
};

interface ColProps {
  className?: string;
  children: ReactNode;
  span?: ResponsiveColSpan | "auto";
}

const Col: FunctionComponent<ColProps> = ({
  className,
  children,
  span = undefined,
}: ColProps) => {
  const spanStyle: {
    xs: StylesType;
    md: StylesType;
    lg: StylesType;
  } = {
    xs: defaultStyle,
    md: defaultStyle,
    lg: defaultStyle,
  };

  const { isXS, isMD, isLG } = useAppMediaQuery();

  if (span !== undefined) {
    const spanObj: ResponsiveColSpan = span as ResponsiveColSpan;
    spanStyle.xs = convertSpanToStyle(spanObj, "xs");
    spanStyle.md = convertSpanToStyle(spanObj, "md");
    spanStyle.lg = convertSpanToStyle(spanObj, "lg");
  }

  const getStyle = (): StylesType => {
    if (isXS) {
      return spanStyle.xs;
    }
    if (isMD) {
      return spanStyle.md;
    }
    if (isLG) {
      return spanStyle.lg;
    }

    return spanStyle.xs;
  };

  return (
    <div
      className={classnames(styles.col, className, {
        [styles.auto]: span === undefined,
      })}
      style={getStyle()}
    >
      {children}
    </div>
  );
};

Col.defaultProps = {
  className: "",
  span: undefined,
};

export default Col;
