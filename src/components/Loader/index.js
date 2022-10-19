import ReactLoading from 'react-loading';

import styles from '../../styles/components/Loader.module.scss';
import {blueColor} from '../../styles/variables.module.scss';

const Loader = () => (
  <div className={styles.loader}>
    <ReactLoading type="spin" color={blueColor}/>
  </div>
);

export default Loader;