export type StatsResponse = {
  data: {
    totalCoins: number;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: number;
    total24hVolume: number;
  };
};

export type ExternalLinkType = {
  name: string;
  url: string;
  type: string;
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
  socials: ExternalLinkType[];
  links: ExternalLinkType[];
  confirmedSupply: boolean;
  numberOfMarkets: number;
  numberOfExchanges: number;
  volume: number;
  marketCap: number;
  price: string;
  circulatingSupply: number;
  totalSupply: number;
  approvedSupply: boolean;
  firstSeen: number;
  listedAt: number;
  change: number;
  history: string[];
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

export type CoinDetailsResponse = {
  data: {
    coin: CoinDetails;
  };
};

export type ExchangeDetails = {
  id: string;
  uuid: string;
  name: string;
  description: string;
  iconUrl: string;
  websiteUrl: string;
  numberOfMarkets: number;
  rank: number;
  marketShare: number;
  volume: number;
};

export type ExchangesResponse = {
  data: {
    exchanges: ExchangeDetails[];
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
