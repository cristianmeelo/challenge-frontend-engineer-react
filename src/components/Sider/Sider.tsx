import { useState } from 'react';
import { Layout, Menu } from 'antd';
import Image from 'next/image';
import { ShopOutlined, FileOutlined, DashboardOutlined, TeamOutlined, SubnodeOutlined, SyncOutlined } from '@ant-design/icons';

import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';
import { getItem } from '@/functions';
import { useRouterPush } from '@/hooks';
import logo from '/public/logo-tractian.svg';

export const Sider = ({ params }: { params: { lang: Locale } }) => {
  const dict = getLanguageUseClient(params.lang);
  const [collapsed, setCollapsed] = useState(false);
  const { navigateTo } = useRouterPush();
  const { Sider } = Layout;

  const items: MenuItem[] = [
    getItem('Option 1', '/dashboard', <DashboardOutlined />),
    getItem(`${dict.sidebar.icon_2}`, '/companies', <ShopOutlined />),
    getItem(`${dict.sidebar.icon_3}`, '/units', <SubnodeOutlined />),
    getItem(`${dict.sidebar.icon_4}`, '/users', <TeamOutlined />, [getItem('Team 1', '4'), getItem('Team 2', '5')]),
    getItem(`${dict.sidebar.icon_5}`, '/workorders', <FileOutlined />),
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Image src={logo} className="sidebar-logo" alt="tractian enterprise logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={(item) => navigateTo(item.key)} />
    </Sider>
  );
};
