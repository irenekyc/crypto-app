import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NewsRequestParams, NewsResponse } from "../typings/API";

const coinsNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_COIN_RANKING_API_KEY,
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

// eslint-disable-next-line import/prefer-default-export
export const coinsNewsApi = createApi({
  reducerPath: "coinsNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    fetchNews: builder.query<NewsResponse, NewsRequestParams>({
      query: ({ count }) => ({
        url: `/news/search?q=crypto currencies&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        headers: coinsNewsHeaders,
      }),
    }),
    fetchAllNews: builder.query<NewsResponse, void>({
      query: () => ({
        url: `/news/search?q=crypto currencies&safeSearch=Off&textFormat=Raw&freshness=Day&count=100`,
        headers: coinsNewsHeaders,
      }),
    }),
  }),
});

export const { useFetchNewsQuery, useFetchAllNewsQuery } = coinsNewsApi;
