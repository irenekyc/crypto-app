import { configureStore } from "@reduxjs/toolkit";

import { coinRankingApi } from "./services/coinRankingApi";

export const store = configureStore({
  reducer: {
    [coinRankingApi.reducerPath]: coinRankingApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
