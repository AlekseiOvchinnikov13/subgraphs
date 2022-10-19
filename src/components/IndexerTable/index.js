import {INDEXERS_DATA, TABLE_COLUMNS} from '../../data/indexers';
import useIndexer from '../../hooks/useIndexer';
import styles from '../../styles/components/IndexerTable.module.scss';
import Loader from '../Loader';
import DataCell from '../DataCell';
import DataRow from '../DataRow';
import {getColumnTitlesRow} from '../../utils';

const IndexerTable = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const indexersData = INDEXERS_DATA.map(item => useIndexer(item.indexer));

  const getRowData = (indexerData) => {
    const [data, isLoading] = indexerData;

    if (isLoading) return <Loader/>;

    return data.map((item, index) =>
      <DataCell
        key={item + index}
        value={item}
        className={`${index === 0 ? `${styles.address}` : ''}`}
      />
    );
  };

  return (
    <div className={styles.indexersTable}>
      {getColumnTitlesRow(TABLE_COLUMNS)}
      {indexersData.map(indexer =>
        <DataRow key={indexer.data}>
          {getRowData(indexer)}
        </DataRow>
      )}
    </div>
  );
};

export default IndexerTable;
