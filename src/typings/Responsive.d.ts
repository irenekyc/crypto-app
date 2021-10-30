import { LG, MD, XS } from "../constants/responsive";

export type SizeType = typeof LG | typeof MD | typeof XS;

export type SpanType = number | "auto";

export type ResponsiveColSpan = {
  [size: string]: SpanType;
};
