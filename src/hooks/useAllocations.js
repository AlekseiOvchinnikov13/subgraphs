import {useGetAllocationsQuery} from '../store/indexers/indexerApi';

const useAllocations = (id) => {
  const {data, isLoading} = useGetAllocationsQuery(id);
  return [data, isLoading];
};

export default useAllocations;