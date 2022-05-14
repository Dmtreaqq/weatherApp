import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWeather } from "../types/IWeather";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getWeatherByCityName: builder.query<IWeather, string>({
      query: (cityName: string) => ({
        url: "weathers/1",
        params: {
          q: cityName,
        },
      }),
    }),
  }),
});

// https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${process.env.REACT_APP_API_KEY}&units=metric
