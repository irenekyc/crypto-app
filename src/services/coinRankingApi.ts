import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  CoinDetailsResponse,
  CoinsResponse,
  ExchangesResponse,
  StatsResponse,
} from "../typings/API";

const coinRankingApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "9db871c73cmsh1402cc0508a38a8p1316a6jsnf50853e3214f",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

// eslint-disable-next-line import/prefer-default-export
export const coinRankingApi = createApi({
  reducerPath: "coinRankingApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchStats: builder.query<StatsResponse, void>({
      query: () => ({
        url: "/stats",
        headers: coinRankingApiHeaders,
      }),
    }),
    fetchCoins: builder.query<CoinsResponse, void>({
      query: () => ({
        url: "/coins",
        headers: coinRankingApiHeaders,
      }),
    }),
    fetchExchanges: builder.query<ExchangesResponse, void>({
      query: () => ({
        url: "/exchanges",
        headers: coinRankingApiHeaders,
      }),
    }),
    fetchCoinDetails: builder.query<CoinDetailsResponse, string>({
      query: (id) => ({
        url: `/coin/${id}`,
        headers: coinRankingApiHeaders,
      }),
    }),
  }),
});

export const {
  useFetchStatsQuery,
  useFetchCoinsQuery,
  useFetchExchangesQuery,
  useFetchCoinDetailsQuery,
} = coinRankingApi;
