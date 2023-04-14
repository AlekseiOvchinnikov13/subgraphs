import {useGetIndexerQuery} from '../store/indexers/indexerApi';
import {INDEXERS_DATA} from '../data/indexers';

const useIndexer = (address) => {
  const {data, isLoading} = useGetIndexerQuery(address);
  return !isLoading && {
    'indexer address': data?.indexer,
    'name': data?.indexer_name && INDEXERS_DATA.find(indexer => indexer.indexer === address).indexer_name,
    'available stake': `${data?.total_allowable_stake.toLocaleString('ru')} ($${data?.total_allowable_stake_usd.toLocaleString('ru')})`,
    'allocated stake': `${data?.total_allocated_stake.toLocaleString('ru')} ($${data?.total_allocated_stake_usd.toLocaleString('ru')})`,
    'unallocated stake': `${data?.allocation_difference.toLocaleString('ru')} ($${data?.allocation_difference_usd.toLocaleString('ru')})`,
    'total pending rewards': `${data?.pending_rewards_indexer.toLocaleString('ru')} ($${data?.pending_rewards_indexer_usd.toLocaleString('ru')})`,
    'time of oldest allocation': `${data?.time_lapsed_first_allocation}`,
    'time of newest allocation': `${data?.time_lapsed_last_allocation}`,
  };
};

export default useIndexer;
