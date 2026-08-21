import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const calculatorApi = createApi({
  reducerPath: "calculatorApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/calculator",
  }),

  endpoints: (builder) => ({
    calculateHeartRisk: builder.mutation({
      query: (data) => ({
        url: "/heart",
        method: "POST",
        body: data,
      }),
    }),

    calculateDiabetesRisk: builder.mutation({
      query: (data) => ({
        url: "/diabetes",
        method: "POST",
        body: data,
      }),
    }),

    calculateHypothyroidRisk: builder.mutation({
      query: (data) => ({
        url: "/hypothyroid",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCalculateHeartRiskMutation,
  useCalculateDiabetesRiskMutation,
  useCalculateHypothyroidRiskMutation,
} = calculatorApi;