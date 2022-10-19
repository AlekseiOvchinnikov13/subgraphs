import {useGetIndexerQuery} from '../store/indexers/indexerApi';
import {INDEXERS_DATA} from '../data/indexers';

const useIndexer = (address) => {
  const {data, isLoading} = useGetIndexerQuery(address);
  const result = [
    data?.indexer,
    data?.indexer_name && INDEXERS_DATA.find(indexer => indexer.indexer === address).indexer_name,
    `${data?.total_allowable_stake.toLocaleString('ru')} <br/> ($${data?.total_allowable_stake_usd.toLocaleString('ru')})`,
    `${data?.total_allocated_stake.toLocaleString('ru')} <br/> ($${data?.total_allocated_stake_usd.toLocaleString('ru')})`,
    `${data?.allocation_difference.toLocaleString('ru')} <br/> ($${data?.allocation_difference_usd.toLocaleString('ru')})`,
    `${data?.pending_rewards_indexer.toLocaleString('ru')} <br/> ($${data?.pending_rewards_indexer_usd.toLocaleString('ru')})`,
    `${data?.time_lapsed_first_allocation}`,
    `${data?.time_lapsed_last_allocation}`,
    data?.grt_usd.toLocaleString('ru'),
  ];
  return [result, isLoading];
};

export default useIndexer;
