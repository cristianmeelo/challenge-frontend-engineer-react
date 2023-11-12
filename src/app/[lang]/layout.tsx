'use client';

import { Layout } from 'antd';
import { Sider, Header } from '@/components';
import { AppProvider } from '@/contexts';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { Content } = Layout;

  const contentStyle: React.CSSProperties = {
    padding: '1.5rem 2rem',
    color: '#fff',
    backgroundColor: '#fff',
  };

  return (
    <AppProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider params={params} />
        <Layout>
          <Header params={params} />
          <Content style={contentStyle}>{children}</Content>
        </Layout>
      </Layout>
    </AppProvider>
  );
}
