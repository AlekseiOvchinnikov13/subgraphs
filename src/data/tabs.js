import IndexerTable from '../components/TabPanel/IndexerTable';
import Rewards from '../components/TabPanel/Rewards';

export const TAB_NAMES = [
  {key: 1, label: 'Indexers', children: <IndexerTable/>},
  {key: 2, label: 'Rewards', children: <Rewards/>}
];