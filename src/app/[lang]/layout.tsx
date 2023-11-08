'use client'

import { Breadcrumb, Layout, theme } from 'antd'
import { Locale } from '@/config/i18n.config'
import { Sider, Header, Footer } from '@/components'

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
  const { Content } = Layout

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider params={params} />
      <Layout>
        <Header />
        {children}
        <Footer params={params} />
      </Layout>
    </Layout>
  )
}
