import { NavItemProps } from "../typings/Nav";

export const HOME = "HOME";
export const CRYPTOCURRENCIES = "CRYPTOCURRENCIES";
export const EXCHANGES = "EXCHANGES";
export const NEWS = "NEWS";

const navList: NavItemProps[] = [
  {
    path: "/",
    vanityName: HOME,
  },
  {
    path: "/cryptocurrencies",
    vanityName: CRYPTOCURRENCIES,
  },
  {
    path: "/exchanges",
    vanityName: EXCHANGES,
  },
  {
    path: "/news",
    vanityName: NEWS,
  },
];

export default navList;
