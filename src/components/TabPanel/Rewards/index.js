import {BENEFICIARIES} from '../../../data/indexers';
import styles from '../../../styles/components/Rewards.module.scss';
import OperatorTransactions from '../../../store/indexerRewards/OperatorTransactions';

const Rewards = () => {
  return (
    <div className={styles.wrapper}>
      {BENEFICIARIES.map(data =>
        <OperatorTransactions key={data.name} data={data}/>
      )}
    </div>
  );
};

export default Rewards;