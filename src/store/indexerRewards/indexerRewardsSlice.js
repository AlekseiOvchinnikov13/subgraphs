import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

const GRT_CONTRACT_ADDRESS='0xc944e90c64b2c07662a292be6244bdf05cda44a7';

export const etherscanApi = createApi({
  reducerPath: 'indexerReward',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.etherscan.io/api'
  }),
  endpoints: builder => ({
    getIndexerTransactionsRewards: builder.query({
      query: (operator) =>
        `?module=account&action=tokentx&page=1&offset=30&sort=desc&contractaddress=${GRT_CONTRACT_ADDRESS}&address=${operator}&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API}`
    })
  })
});
export const {useGetIndexerTransactionsRewardsQuery} = etherscanApi;