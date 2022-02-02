import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_PRACTICE_API_URL;

export const practiceApi = createApi({
  reducerPath: 'practiceApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  refetchOnFocus: true,
  tagTypes: ['Practices'],
  endpoints: (builder) => ({
    getPractices: builder.query({
      query: () => '/practice',
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({
                type: 'Practices',
                id,
              })),
              'Practices',
            ]
          : ['Practices'];
      },
    }),
  }),
});

export const { useGetPracticesQuery } = practiceApi;
