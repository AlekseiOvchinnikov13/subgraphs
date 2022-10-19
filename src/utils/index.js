import DataCell from '../components/DataCell';
import DataRow from '../components/DataRow';
import {formatDistanceToNow} from 'date-fns';

export const getAllocationData = (data) => {
  const createdAt = new Date(data.created_at * 1000);
  return [
    data.subgraph_name,
    data.subgraph_ipfs,
    data.allocated_tokens.toLocaleString('ru'),
    data.active_epochs,
    formatDistanceToNow(createdAt),
    data.pending_reward.toLocaleString('ru'),
    data.pending_reward_rate.toLocaleString('ru'),
    data.id
  ];
};

export const getColumnTitlesRow = (array) =>
  <DataRow isTitle>
    {array.map(column =>
      <DataCell
        key={column}
        value={column}
      />
    )}
  </DataRow>;