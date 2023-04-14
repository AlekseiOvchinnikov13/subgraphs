import styles from '../../styles/components/Tab.module.scss';
import {Tabs} from 'antd';

const Tab = ({items}) => {

  return (
    <Tabs
      className={styles.tab}
      tabPosition="top"
      tabBarGutter={20}
    >
      {items.map(tab =>
        <Tabs.TabPane
          key={tab.label}
          tab={tab.label}
          className={styles.tabPane}
        >
          {tab.children}
        </Tabs.TabPane>
      )}
    </Tabs>
  );
};

export default Tab;