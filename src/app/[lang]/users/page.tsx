'use client';

import { Breadcrumb, Layout, Typography, theme } from 'antd';
import { Locale } from '@/config/i18n.config';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export default function Users({ params }: { params: { lang: Locale } }) {
  const dict = getLanguageUseClient(params.lang);

  const { Content } = Layout;
  const { Title } = Typography;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Title level={1}>{dict.sidebar.icon_3}</Title>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>Bill is a cat.</div>
    </Content>
  );
}
