import {configureStore} from '@reduxjs/toolkit';
import {indexerApi} from './indexers/indexerApi';
import {etherscanApi} from './indexerRewards/indexerRewardsSlice';

export const store = configureStore({
  reducer: {
    [indexerApi.reducerPath]: indexerApi.reducer,
    [etherscanApi.reducerPath]: etherscanApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(indexerApi.middleware).concat(etherscanApi.middleware)
});