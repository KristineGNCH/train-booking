import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://students.netoservices.ru/fe-diplom/routes/cities?name=${encodeURIComponent(query)}`",
  prepareHeaders: (headers) => {
    headers.set('Accept', 'application/json');
    return headers;
  },
});

const buildQueryString = (params) => {
  return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
};

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (builder) => ({
    getCities: builder.query({
      query: (arg) => `routes/cities?name=${arg}`,
      providesTags: (result, error, arg) => [{ type: "Cities", id: arg }],
    }),
    getRoutes: builder.query({
      query: (args) => `routes?${buildQueryString(args)}`,
      providesTags: (result, error, args) => [{ type: "Routes", id: args }],
    }),
    getLastRoutes: builder.query({
      query: () => `routes/last`,
      providesTags: (result, error) => [{ type: "LastRoutes" }],
    }),
    getSeats: builder.query({
      query: (args) => {
        let path = `routes/${args.id}/seats`;
        const queryString = buildQueryString(args);
        return queryString ? `${path}?${queryString}` : path;
      },
      providesTags: (result, error, args) => [{ type: "Seats", id: args }],
    }),
    addNewOrder: builder.mutation({
      query: (payload) => ({
        url: "order",
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

const postEmail = async (email) => {
  try {
    let formData = new FormData();
    formData.append("email", email);
    const response = await fetch("https://netology-trainbooking.netoservices.ru/subscribe?", {
      body: formData,
      method: "POST",
    });

    const data = await response.json();
    if (data.status) {
      alert("Вы подписаны на рассылку");
    } else {
      alert("Ошибка. Что-то пошло не так");
    }
  } catch (error) {
    console.error("Ошибка при подписке:", error);
    alert("Ошибка сети. Пожалуйста, попробуйте позже.");
  }
};

export const {
  useGetRoutesQuery,
  useGetCitiesQuery,
  useGetLastRoutesQuery,
  useGetSeatsQuery,
  useAddNewOrderMutation,
} = api;
export { postEmail };