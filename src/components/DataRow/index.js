import {useState} from 'react';
import {ALLOCATION_COLUMNS, INDEXERS_DATA} from '../../data/indexers';
import useAllocations from '../../hooks/useAllocations';
import Loader from '../Loader';
import {getAllocationData, getColumnTitlesRow} from '../../utils';
import DataCell from '../DataCell';
import styles from '../../styles/components/DataRow.module.scss';

const DataRow = ({children, isTitle, isInner, className}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState();

  const onClickHandler = (e) => {
    const indexer = INDEXERS_DATA.find(indexer => indexer.indexer === e.target.innerHTML)?.indexer;
    if (!indexer) return null;
    setAddress(indexer);
    setIsOpen(!isOpen);
  };

  const [data, isLoading] = useAllocations(address);

  const getAllocationRow = allocation =>
    getAllocationData(allocation).map(item =>
      <DataCell
        key={item}
        value={item}
      />
    );

  return (
    isTitle || isInner
      ? <div
        className={`${styles.dataRow} ${isTitle || isInner ? styles.dataRowTitle : styles.dataRowData} ${className}`}
      >
        {children}
      </div>
      : <button
        className={`${styles.dataRow} ${isTitle ? styles.dataRowTitle : styles.dataRowData} ${className}`}
        onClick={e => onClickHandler(e)}
      >
        {children}
        {isOpen &&
          <div className={styles.allocationTable}>
            {getColumnTitlesRow(ALLOCATION_COLUMNS)}
            <DataRow isInner>
              {data.length > 0 && !isLoading
                ? data.map(allocation =>
                  getAllocationRow(allocation)
                )
                : <Loader/>
              }
            </DataRow>
          </div>
        }
      </button>
  );
};

export default DataRow;