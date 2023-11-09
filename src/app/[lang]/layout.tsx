'use client'

import { Layout } from 'antd'
import { Locale } from '@/config/i18n.config'
import { Sider, Header, Footer } from '@/components'

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider params={params} />
      <Layout>
        <Header params={params} />
        {children}
        <Footer params={params} />
      </Layout>
    </Layout>
  )
}
