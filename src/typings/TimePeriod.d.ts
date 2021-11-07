import {
  TIME_PERIOD_1Y,
  TIME_PERIOD_3H,
  TIME_PERIOD_3M,
  TIME_PERIOD_7D,
  TIME_PERIOD_24H,
  TIME_PERIOD_30D,
} from "../constants/time-period";

export type TimePeriodType =
  | typeof TIME_PERIOD_7D
  | typeof TIME_PERIOD_24H
  | typeof TIME_PERIOD_3H
  | typeof TIME_PERIOD_30D
  | typeof TIME_PERIOD_3M
  | typeof TIME_PERIOD_1Y;
