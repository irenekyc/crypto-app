import { ReactNode } from "react";

import {
  CoinsIcon,
  ExchangesIcon,
  HomeIcon,
  NewsIcon,
} from "../components/icons/nav";
import { CRYPTOCURRENCIES, EXCHANGES, HOME, NEWS } from "../constants/nav";

const getNavIcons = (navName: string): ReactNode => {
  switch (navName.toUpperCase()) {
    case HOME:
      return HomeIcon;
    case EXCHANGES:
      return ExchangesIcon;
    case CRYPTOCURRENCIES:
      return CoinsIcon;
    case NEWS:
      return NewsIcon;
    default:
      return `<></>`;
  }
};

export default getNavIcons;
