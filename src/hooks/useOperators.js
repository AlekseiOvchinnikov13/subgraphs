import {useGetIndexerTransactionsRewardsQuery} from '../store/indexerRewards/indexerRewardsSlice';

const useOperator = address => {
  const {data, isLoading} = useGetIndexerTransactionsRewardsQuery(address);
  return [data, isLoading];
};

export default useOperator;
