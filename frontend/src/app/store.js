import { configureStore } from "@reduxjs/toolkit";
import { calculatorApi } from "../services/calculatorApi";

export const store = configureStore({
  reducer: {
    [calculatorApi.reducerPath]: calculatorApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(calculatorApi.middleware),
});