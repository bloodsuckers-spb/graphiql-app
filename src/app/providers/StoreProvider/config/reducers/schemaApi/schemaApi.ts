import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getIntrospectionQuery } from 'graphql';

export const schemaApi = createApi({
  reducerPath: 'schemaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ``,
  }),
  endpoints: (build) => ({
    getSchema: build.query({
      query: (url) => {
        if (!url) return '';
        return {
          url: url,
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            variables: {},
            query: getIntrospectionQuery(),
          }),
        };
      },
    }),
  }),
});

export const { useGetSchemaQuery } = schemaApi;
