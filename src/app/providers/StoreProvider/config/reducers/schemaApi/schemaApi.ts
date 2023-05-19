import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getIntrospectionQuery } from 'graphql';

import type { ResponseData } from 'app/types';

export const schemaApi = createApi({
  reducerPath: 'schemaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ``,
  }),
  endpoints: (build) => ({
    getSchema: build.query<ResponseData, string>({
      query: (url) => {
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
