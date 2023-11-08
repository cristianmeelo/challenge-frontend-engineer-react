"use client"

import { Breadcrumb, Layout, theme } from "antd"
import { Locale } from "@/config/i18n.config"
import { Sider, Header, Footer } from "@/components"

export default function Home({ params }: { params: { lang: Locale } }) {
  const { Content } = Layout

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider params={params} />
      <Layout>
      <Header />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>Bill is a cat.</div>
        </Content>
        <Footer params={params} />
      </Layout>
    </Layout>
  )
}
