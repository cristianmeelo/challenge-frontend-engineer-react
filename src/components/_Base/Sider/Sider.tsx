import { useState } from 'react';
import { Layout, Menu, Typography } from 'antd';
import {
  ShopOutlined,
  FileOutlined,
  AppstoreOutlined,
  TeamOutlined,
  SisternodeOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import Image from 'next/image';

import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { useRouterPush } from '@/hooks';
import { createMenuItem } from '@/functions';
import logo from '/public/logo-tractian.svg';

export const Sider = ({ params }: { params: { lang: Locale } }) => {
  const dict = getLanguageUseClient(params.lang);
  const [collapsed, setCollapsed] = useState(false);
  const { navigateTo } = useRouterPush();
  const { Sider } = Layout;
  const { Text } = Typography;

  const items: MenuItem[] = [
    createMenuItem(`${dict.sidebar.icon_1}`, '/assets', <AppstoreOutlined />),
    createMenuItem(`${dict.sidebar.icon_2}`, '/companies', <ShopOutlined />),
    createMenuItem(`${dict.sidebar.icon_3}`, '/units', <SisternodeOutlined />),
    createMenuItem(`${dict.sidebar.icon_4}`, '/users', <TeamOutlined />),
    createMenuItem(`${dict.sidebar.icon_5}`, '/workorders', <FileOutlined />),
    createMenuItem(`${dict.sidebar.icon_6}`, '/dashboard', <DashboardOutlined />),
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className={`sidebar-logo-container ${collapsed ? 'collapsed' : ''}`}>
        <Image src={logo} className="sidebar-logo" alt="tractian enterprise logo" />
        {!collapsed && <Text className="sidebar-text">{dict.header.message}</Text>}
      </div>

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
