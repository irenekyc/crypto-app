export const SORT_BY_PRICE_ASC = "price - low to high";
export const SORT_BY_PRICE_DESC = "price - high to low";
export const SORT_BY_PRICE = "price";

export const SORT_BY_MARKET_CAP = "marketCap";
export const SORT_BY_MARKET_CAP_ASC = "market capacity - low to high";
export const SORT_BY_MARKET_CAP_DESC = "market capacity - high to low";

export const SORT_BY_VOLUME = "24hVolume";
export const SORT_BY_HISTORY = "listedAt";

export const ASC = "asc";
export const DESC = "desc";

export const SORTING_OPTIONS = [
  {
    name: SORT_BY_PRICE_ASC,
    orderBy: SORT_BY_PRICE,
    orderDirection: ASC,
  },
  {
    name: SORT_BY_PRICE_DESC,
    orderBy: SORT_BY_PRICE,
    orderDirection: DESC,
  },
];
