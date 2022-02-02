import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const baseUrl = process.env.REACT_APP_PRACTICE_API_URL;

export const practiceApi = createApi({
  reducerPath: 'practiceApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
});
