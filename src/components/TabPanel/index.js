import styles from '../../styles/components/Tab.module.scss';
import {Tabs} from 'antd';

const TabPanel = ({items}) => {

  return (
    <Tabs
      className={styles.tab}
      tabPosition="top"
      tabBarGutter={20}
      items={items}
    />
  );
};

export default TabPanel;