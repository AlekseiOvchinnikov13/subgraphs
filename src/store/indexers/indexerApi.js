import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const indexerApi = createApi({
  reducerPath: 'indexer',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.maplenodes.com/graph/'
  }),
  endpoints: builder => ({
    getIndexer: builder.query({
      query: (id) => `indexer/${id}`
    }),
    getAllocations: builder.query({
      query: (id) => `allocations/info/${id}`
    })
  })
});

export const {useGetIndexerQuery, useGetAllocationsQuery} = indexerApi;