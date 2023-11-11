'use client';

import { Layout } from 'antd';
import { Sider, Header } from '@/components';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { Content } = Layout;

  const contentStyle: React.CSSProperties = {
    padding: '0 16px',
    color: '#fff',
    backgroundColor: '#fff',
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider params={params} />
      <Layout>
        <Header params={params} />
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
}
