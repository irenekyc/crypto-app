import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { NewsRequestParams, NewsResponse } from "../typings/API";

const coinsNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "9db871c73cmsh1402cc0508a38a8p1316a6jsnf50853e3214f",
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
  }),
});

export const { useFetchNewsQuery } = coinsNewsApi;
