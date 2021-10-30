import { configureStore } from "@reduxjs/toolkit";

import { coinRankingApi } from "./services/coinRankingApi";
import { coinsNewsApi } from "./services/coinsNewsApi";

export const store = configureStore({
  reducer: {
    [coinRankingApi.reducerPath]: coinRankingApi.reducer,
    [coinsNewsApi.reducerPath]: coinsNewsApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
