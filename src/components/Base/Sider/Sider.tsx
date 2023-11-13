import { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import {
  ShopOutlined,
  FileOutlined,
  AppstoreOutlined,
  TeamOutlined,
  SisternodeOutlined,
} from '@ant-design/icons';
import Image from 'next/image';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { getItem } from '@/functions';
import { useRouterPush } from '@/hooks';
import logo from '/public/logo-tractian.svg';

export const Sider = ({ params }: { params: { lang: Locale } }) => {
  const dict = getLanguageUseClient(params.lang);
  const [collapsed, setCollapsed] = useState(false);
  const { navigateTo } = useRouterPush();
  const { Sider } = Layout;
  const { Text } = Typography;

  const items: MenuItem[] = [
    getItem(`${dict.sidebar.icon_1}`, '/assets', <AppstoreOutlined />, [getItem(`${dict.sidebar.icon_1_1}`, '/assets/grid'), getItem(`${dict.sidebar.icon_1_2}`, '/assets/list')]),
    getItem(`${dict.sidebar.icon_2}`, '/companies', <ShopOutlined />),
    getItem(`${dict.sidebar.icon_3}`, '/units', <SisternodeOutlined />),
    getItem(`${dict.sidebar.icon_4}`, '/users', <TeamOutlined />),
    getItem(`${dict.sidebar.icon_5}`, '/workorders', <FileOutlined />),
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Image src={logo} className="sidebar-logo" alt="tractian enterprise logo" />
      {!collapsed && <Text className="sidebar-text">{dict.header.message}</Text>}

      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
        onClick={(item) => navigateTo(item.key)}
      />
    </Sider>
  );
};
