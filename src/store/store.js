import {configureStore} from '@reduxjs/toolkit';
import {indexerApi} from './indexers/indexerApi';

export const store = configureStore({
  reducer: {
    [indexerApi.reducerPath]: indexerApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(indexerApi.middleware)
});