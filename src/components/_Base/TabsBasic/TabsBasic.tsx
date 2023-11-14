import { Tabs } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { ListView } from '../../Assets/ListView/ListView';
import { GridView } from '../../Assets/GridView/GridView';

export const TabsBasic = ({ activeTab, setActiveTab, language }: TabsBasicProps) => {
  const dict = getLanguageUseClient(language);

  const tabsData: TabData[] = [
    {
      key: 'list',
      label: <>{dict.sidebar.icon_1_2}</>,
      icon: <UnorderedListOutlined />,
      content: <ListView language={language} />,
    },
    {
      key: 'grid',
      label: <>{dict.sidebar.icon_1_1}</>,
      icon: <AppstoreOutlined />,
      content: <GridView language={language} />,
    },
  ];

  return (
    <Tabs
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key as tabsOptions)}
      tabBarGutter={20}
      tabPosition="top"
    >
      {tabsData.map((tab) => (
        <Tabs.TabPane
          key={tab.key}
          tab={
            <>
              {tab.icon} {tab.label}
            </>
          }
        >
          {tab.content}
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};
