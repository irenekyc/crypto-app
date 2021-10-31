export type StatsResponse = {
  data: {
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: number;
    total24hVolume: number;
  };
};

export type CoinDetails = {
  id: string;
  uuid: string;
  slug: string;
  symbol: string;
  name: string;
  description: string;
  iconUrl: string;
  color: string;
  websiteUrl: string;
  rank: number;
  price: string;
  change: number;
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
};

export type CoinsResponse = {
  data: {
    coins: CoinDetails[];
  };
};

export type NewsRequestParams = {
  count: number;
};

export type NewsImage = {
  _type: string;
  thumbnail: {
    _type: string;
    contentUrl: string;
    width?: number;
    height?: number;
  };
};

export type NewsDetails = {
  type: string;
  name: string;
  url: string;
  image: NewsImage;
  description: string;
  provider: {
    name: string;
    image: NewsImage;
  }[];
  datePublished: string;
};

export type NewsResponse = {
  value: NewsDetails[];
};
